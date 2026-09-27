export const name="lucid_3-square-arrow-out-up-right";
export const id="dl_8d8908287ebc457a8eec";
export const url=new URL("../icons/lucid_3-square-arrow-out-up-right.svg?v=8d4ba250194fc952e0f010de48663f08fe0ace8a49083bf3adc80b7438a4f86f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
