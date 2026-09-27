export const name="lucid_2-dice-4";
export const id="dl_d6035fa417e343489677";
export const url=new URL("../icons/lucid_2-dice-4.svg?v=e4c9146cb28e06c6e7947ea4f3df4b848e88222f92c4adb3a8e7c76141db7b1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
