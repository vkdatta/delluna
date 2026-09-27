export const name="lucid_1-circle-arrow-out-up-right";
export const id="dl_0d77d46c9d074e80aa04";
export const url=new URL("../icons/lucid_1-circle-arrow-out-up-right.svg?v=3f369a89f0f7098744cf3180eb35db55f8be6b0f3ada859d7738b137cfb60de2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
