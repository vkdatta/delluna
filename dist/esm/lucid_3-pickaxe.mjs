export const name="lucid_3-pickaxe";
export const id="dl_4c0066806a144c98be90";
export const url=new URL("../icons/lucid_3-pickaxe.svg?v=88c9df7fefdbc746ba506f7bc328af7ddef3cb0e201bebeeda84757e0c9bb6d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
