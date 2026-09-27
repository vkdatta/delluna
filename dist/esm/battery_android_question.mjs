export const name="battery_android_question";
export const id="dl_c4cfc12da2671dacb542";
export const url=new URL("../icons/battery_android_question.svg?v=bbeb0b4e9d15f8d9ecc698297ccbb23488e7c99465a84ddc9273f816bda3a154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
