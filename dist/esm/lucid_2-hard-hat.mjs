export const name="lucid_2-hard-hat";
export const id="dl_65fb64b3eb7e4f728857";
export const url=new URL("../icons/lucid_2-hard-hat.svg?v=96b25a977f4fbf0a00f1c26bd848a73a06eced0bb92ffe1d7c266e0d14f3cdc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
