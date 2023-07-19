<template>
  <div>
    <div
      v-for="(item, i) in userCards"
      :key="i"
      :class="[item.checked ? 'my-cards-active' : '', 'my-cards']"
    >
      <div class="radio-container">
        <input
          type="radio"
          name="card"
          @change="submitCard(item, i)"
          :checked="item.checked"
        />
      </div>
      <div>
        <div class="card-info">
          <img
            :src="data[item.type] || masterCard"
            alt="visa"
            loading="lazy"
            class="card-type"
          />
          <div>
            <p>{{ item.type.toUpperCase() }} - {{ item.code }}</p>
            <p class="m-0">Balance: {{ item.balance }} $</p>
            <p class="font-transparent">{{ item.name }} | {{ item.expire }}</p>
            <div class="d-flex gap-1">
              <!-- <button>Edit</button> <p class="font-transparent">|</p> -->
              <button @click="deleteCard(item.id)">Delete</button>
            </div>
          </div>
        </div>
        <div class="check-security">
          <p class="security-text">Security Code</p>
          <div class="check-input">
            <div class="input-field">
              <input
                type="password"
                @input="handlePassChange(i, $event.target.value)"
                :value="passes[i] || ''"
              />
              <img
                :src="checking(passes[i], item.security)"
                alt="card"
                :class="[passes[i]?.length > 2 ? 'opacity-1' : 'opacity-0']"
              />
            </div>
            <img src="../../assets/Card.svg" alt="card" />
            <p class="m-0">3-digits on back of card</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRecoilState } from "recoil";
import { UserCardsList, chosenCard } from "../../atom/atom";

export default {
  setup() {
    const [userCards, setUserCards] = useRecoilState(UserCardsList);
    const [card, setCard] = useRecoilState(chosenCard);
    const passes = ref([]);

    const deleteCard = (id) => {
      const newData = userCards.filter((item) => item.id !== id);
      setUserCards(newData);
    };

    const data = {
      visa: "../../assets/visa.png",
    };

    const handlePassChange = (index, value) => {
      passes.value[index] = value;
    };

    const submitCard = (comingItem, i) => {
      if (userCards[i].security !== passes.value[i]) {
        return alert("wrong security code");
      }

      const newData = userCards.map((item) => {
        if (comingItem.number === item.number) {
          return { ...item, checked: !item.checked };
        } else {
          return { ...item, checked: false };
        }
      });

      setUserCards([...newData]);
      setCard(comingItem);
    };

    const checking = (pass, security) => {
      return pass === security
        ? "../../assets/circle-check-regular.svg"
        : "../../assets/circle-xmark-regular.svg";
    };

    return {
      userCards,
      deleteCard,
      data,
      handlePassChange,
      passes,
      submitCard,
      checking,
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>
<template>
  <div>
    <div
      v-for="(item, i) in userCards"
      :key="i"
      :class="[item.checked ? 'my-cards-active' : '', 'my-cards']"
    >
      <div class="radio-container">
        <input
          type="radio"
          name="card"
          @change="submitCard(item, i)"
          :checked="item.checked"
        />
      </div>
      <div>
        <div class="card-info">
          <img
            :src="data[item.type] || masterCard"
            alt="visa"
            loading="lazy"
            class="card-type"
          />
          <div>
            <p>{{ item.type.toUpperCase() }} - {{ item.code }}</p>
            <p class="m-0">Balance: {{ item.balance }} $</p>
            <p class="font-transparent">{{ item.name }} | {{ item.expire }}</p>
            <div class="d-flex gap-1">
              <!-- <button>Edit</button> <p class="font-transparent">|</p> -->
              <button @click="deleteCard(item.id)">Delete</button>
            </div>
          </div>
        </div>
        <div class="check-security">
          <p class="security-text">Security Code</p>
          <div class="check-input">
            <div class="input-field">
              <input
                type="password"
                @input="handlePassChange(i, $event.target.value)"
                :value="passes[i] || ''"
              />
              <img
                :src="checking(passes[i], item.security)"
                alt="card"
                :class="[passes[i]?.length > 2 ? 'opacity-1' : 'opacity-0']"
              />
            </div>
            <img src="../../assets/Card.svg" alt="card" />
            <p class="m-0">3-digits on back of card</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRecoilState } from "recoil";
import { UserCardsList, chosenCard } from "../../atom/atom";

export default {
  setup() {
    const [userCards, setUserCards] = useRecoilState(UserCardsList);
    const [card, setCard] = useRecoilState(chosenCard);
    const passes = ref([]);

    const deleteCard = (id) => {
      const newData = userCards.filter((item) => item.id !== id);
      setUserCards(newData);
    };

    const data = {
      visa: "../../assets/visa.png",
    };

    const handlePassChange = (index, value) => {
      passes.value[index] = value;
    };

    const submitCard = (comingItem, i) => {
      if (userCards[i].security !== passes.value[i]) {
        return alert("wrong security code");
      }

      const newData = userCards.map((item) => {
        if (comingItem.number === item.number) {
          return { ...item, checked: !item.checked };
        } else {
          return { ...item, checked: false };
        }
      });

      setUserCards([...newData]);
      setCard(comingItem);
    };

    const checking = (pass, security) => {
      return pass === security
        ? "../../assets/circle-check-regular.svg"
        : "../../assets/circle-xmark-regular.svg";
    };

    return {
      userCards,
      deleteCard,
      data,
      handlePassChange,
      passes,
      submitCard,
      checking,
    };
  },
};
</script>

<style>
/* Add your styles here */
</style>
