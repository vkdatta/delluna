export const name="lucid_2-dessert";
export const id="dl_f2115d50813b4b9fbdaa";
export const url=new URL("../icons/lucid_2-dessert.svg?v=c8ae62019b92c92b8b309e1abb500e790cf389555c2e2c479355a2167ec8a236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
