<template>
  <v-container class="fill-height">
    <v-responsive class="fill-height">
      <div class="bg-dark">
        <h1 class="text-center p-3">GENQ KYC FORM</h1>
      </div>
      <h4 class="text-start mt-3">Bio Data</h4>
      <hr class="bg-dark" style="width: 20px" />
      <alert-component
        v-if="successful"
        message="Farmer has been Submitted Successfully"
        title="Success."
        type="alert-success"
      />
      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label class="form-label" for="exampleFormControlInput1"
                >Firstname</label
              >
              <input
                id="firstname"
                v-model="firstName"
                :class="validationErrors.firstName ? 'is-invalid' : ''"
                class="form-control"
                placeholder="First Name"
                type="text"
              />
              <div v-if="validationErrors.firstName" class="text-danger">
                {{ validationErrors.firstName }}
              </div>
            </div>
          </div>

          <div class="col">
            <!--            <TextInput-->
            <!--              v-model="lastName"-->
            <!--              :validation-errors="validationErrors"-->
            <!--              error-name="lastName"-->
            <!--              label="LastName"-->
            <!--            />-->
            <div class="mb-3">
              <label class="form-label" for="exampleFormControlInput1"
                >Lastname</label
              >
              <input
                id="lastname"
                v-model="lastName"
                :class="validationErrors.lastName ? 'is-invalid' : ''"
                class="form-control"
                placeholder="Last Name"
                type="text"
              />
              <div v-if="validationErrors.lastName" class="text-danger">
                {{ validationErrors.lastName }}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <!--            <TextInput-->
            <!--              v-model="dob"-->
            <!--              :validation-errors="validationErrors"-->
            <!--              error-name="dob"-->
            <!--              label="Date of Birth"-->
            <!--              type="date"-->
            <!--            />-->
            <div class="mb-3">
              <label class="form-label" for="exampleFormControlInput1"
                >Date of Birth</label
              >
              <input
                id="firstname"
                v-model="dob"
                :class="validationErrors.dob ? 'is-invalid' : ''"
                class="form-control"
                placeholder="Date of birth"
                type="date"
              />
              <div v-if="validationErrors.dob" class="text-danger">
                {{ validationErrors.dob }}
              </div>
            </div>
          </div>
          <div class="col">
            <!--          defineProps(["modelValue", "label", "items", "validationErrors", "errorName"]);-->
            <!--            <SelectInput-->
            <!--              v-model="gender"-->
            <!--              :items="genders"-->
            <!--              :validation-errors="validationErrors"-->
            <!--              error-name="gender"-->
            <!--              label="Gender"-->
            <!--            />-->
            <label class="form-label" for="exampleFormControlInput1"
              >Gender</label
            >
            <select
              v-model="gender"
              :class="validationErrors.gender ? 'is-invalid' : ''"
              aria-label="Default select example"
              class="form-select"
            >
              <option selected>--Select Gender--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div v-if="validationErrors.gender" class="text-danger">
              {{ validationErrors.gender }}
            </div>
          </div>
        </div>
        <h4 class="text-start">Location</h4>
        <hr />
        <div class="row">
          <div class="col">
            <!--            <SelectInput-->
            <!--              v-model="country"-->
            <!--              :items="countries"-->
            <!--              :validation-errors="validationErrors"-->
            <!--              error-name="country"-->
            <!--              label="Country"-->
            <!--            />-->
            <label class="form-label" for="exampleFormControlInput1"
              >Country</label
            >
            <select
              v-model="country"
              :class="validationErrors.country ? 'is-invalid' : ''"
              aria-label="Default select example"
              class="form-select"
            >
              <option selected>--Select Country--</option>
              <option value="Uganda">Uganda</option>
              <option value="Kenya">Kenya</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Burundi">Burundi</option>
              <option value="Democratic Republic of Congo">
                Democratic Republic of Congo
              </option>
              <option value="South Sudan">South Sudan</option>
            </select>
            <div v-if="validationErrors.country" class="text-danger">
              {{ validationErrors.country }}
            </div>
          </div>
          <div class="col">
            <!--          defineProps(["modelValue", "label", "items", "validationErrors", "errorName"]);-->
            <!--            <TextInput-->
            <!--              v-model="state"-->
            <!--              :validation-errors="validationErrors"-->
            <!--              error-name="state"-->
            <!--              label="State / District"-->
            <!--              type="text"-->
            <!--            />-->
            <div class="mb-3">
              <label class="form-label" for="exampleFormControlInput1"
                >State / District</label
              >
              <input
                id="state"
                v-model="state"
                :class="validationErrors.state ? 'is-invalid' : ''"
                class="form-control"
                placeholder="State / District"
                type="text"
              />
              <div v-if="validationErrors.state" class="text-danger">
                {{ validationErrors.state }}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <!--            <TextInput-->
            <!--              v-model="town"-->
            <!--              :validation-errors="validationErrors"-->
            <!--              error-name="town"-->
            <!--              label="Town"-->
            <!--              type="text"-->
            <!--            />-->
            <div class="mb-3">
              <label class="form-label" for="exampleFormControlInput1"
                >Town</label
              >
              <input
                id="state"
                v-model="town"
                :class="validationErrors.town ? 'is-invalid' : ''"
                class="form-control"
                placeholder="Town"
                type="text"
              />
              <div v-if="validationErrors.town" class="text-danger">
                {{ validationErrors.town }}
              </div>
            </div>
          </div>
          <div class="col">
            <!--            <TextInput-->
            <!--              v-model="zip"-->
            <!--              :validation-errors="validationErrors"-->
            <!--              error-name="zip"-->
            <!--              label="Zip Code"-->
            <!--              type="text"-->
            <!--            />-->
            <div class="mb-3">
              <label class="form-label" for="exampleFormControlInput1"
                >Zip Code</label
              >
              <input
                id="state"
                v-model="zip"
                :class="validationErrors.state ? 'is-invalid' : ''"
                class="form-control"
                placeholder="Zip Code"
                type="text"
              />
              <div v-if="validationErrors.zip" class="text-danger">
                {{ validationErrors.zip }}
              </div>
            </div>
          </div>
        </div>
        <h4>Contact and address</h4>
        <hr />
        <div class="row">
          <div class="col">
            <!--            <TextInput-->
            <!--              v-model="phone1"-->
            <!--              :validation-errors="validationErrors"-->
            <!--              error-name="phone1"-->
            <!--              label="Phone Number 1"-->
            <!--              type="tel"-->
            <!--            />-->
            <div class="mb-3">
              <label class="form-label" for="exampleFormControlInput1"
                >Phone Number 1</label
              >
              <input
                id="state"
                v-model="phone1"
                :class="validationErrors.phone1 ? 'is-invalid' : ''"
                class="form-control"
                placeholder="Phone Number 1"
                type="tel"
              />
              <div v-if="validationErrors.phone1" class="text-danger">
                {{ validationErrors.phone1 }}
              </div>
            </div>
          </div>
          <div class="col">
            <!--            <TextInput-->
            <!--              v-model="phone2"-->
            <!--              :validation-errors="validationErrors"-->
            <!--              error-name="phone2"-->
            <!--              label="Phone Number 2"-->
            <!--              type="tel"-->
            <!--            />-->
            <div class="mb-3">
              <label class="form-label" for="exampleFormControlInput1"
                >Phone Number 2</label
              >
              <input
                id="state"
                v-model="phone2"
                :class="validationErrors.phone2 ? 'is-invalid' : ''"
                class="form-control"
                placeholder="Phone Number 2"
                type="tel"
              />
              <div v-if="validationErrors.phone2" class="text-danger">
                {{ validationErrors.phone2 }}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <!--          <TextInput-->
          <!--            v-model="email"-->
          <!--            :validation-errors="validationErrors"-->
          <!--            error-name="email"-->
          <!--            label="Email"-->
          <!--            type="email"-->
          <!--          />-->
          <div class="mb-3">
            <label class="form-label" for="exampleFormControlInput1"
              >Email</label
            >
            <input
              id="state"
              v-model="email"
              :class="validationErrors.email ? 'is-invalid' : ''"
              class="form-control"
              placeholder="Email"
              type="email"
            />
            <div v-if="validationErrors.email" class="text-danger">
              {{ validationErrors.email }}
            </div>
          </div>
        </div>
        <div v-if="showSubmit" class="row">
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="submit">Button</button>
          </div>
        </div>
      </form>
      <SpinnerComponent v-if="showProgress" />
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import SpinnerComponent from "@/components/form/Spinner.vue";
import AlertComponent from "@/components/form/Alert.vue";

const formData = ref({});
const showProgress = ref(false);
const successful = ref(false);
const showSubmit = ref(true);
const bioData = ref({});
const location = ref({});
const contact = ref({});
const validationErrors = ref({});

const firstName = ref("");
const lastName = ref("");
const dob = ref("");
const gender = ref("--Select Gender--");
const phone1 = ref("");
const phone2 = ref("");
const email = ref("");
const country = ref("--Select Country--");
const state = ref("");
const town = ref("");
const zip = ref("");

const countries = [
  "Tanzania",
  "Kenya",
  "Uganda",
  "Rwanda",
  "Burundi",
  "Democratic Republic of Congo",
  "South Sudan",
];
const genders = ["Male", "Female"];
const submitForm = async () => {
  formData.value.firstName = firstName.value;
  formData.value.lastName = lastName.value;
  formData.value.dob = dob.value;
  formData.value.gender = gender.value;
  formData.value.phone1 = phone1.value;
  formData.value.phone2 = phone2.value;
  formData.value.email = email.value;
  formData.value.country = country.value;
  formData.value.state = state.value;
  formData.value.town = town.value;
  formData.value.zip = zip.value;
  console.log(formData.value);
  const url = "http://127.0.0.1:9000/api/v1/customers";
  showProgress.value = true;
  showSubmit.value = false;

  try {
    const response = await axios.post(url, formData.value);
    showProgress.value = false;
    showSubmit.value = true;
    if (response.status === 200) {
      successful.value = true;
      // showToast("success", "Farmer one registered successfully");
      validationErrors.value = {};
      firstName.value = "";
      lastName.value = "";
      dob.value = "";
      gender.value = "--Select Gender--";
      phone1.value = "";
      phone2.value = "";
      email.value = "";
      country.value = "--Select Country--";
      state.value = "";
      town.value = "";
      zip.value = "";
    }
  } catch (error) {
    // showToast("error", error.response.data.message);
    validationErrors.value = error.response.data.message;
    showProgress.value = false;
    showSubmit.value = true;
  }
};
</script>
