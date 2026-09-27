export const name="lucid_2-flower";
export const id="dl_d4a8461950ae46fc8235";
export const url=new URL("../icons/lucid_2-flower.svg?v=bb51e81f82eef9f99da5d1fcb6ba348707dd21a57b032dd050a1b67649f92df3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
