export const name="lucid_2-face-angry";
export const id="dl_05b37c58c8db4aebbe2c";
export const url=new URL("../icons/lucid_2-face-angry.svg?v=77443a62796d97e20d2cc335eef4686cf20d0cbe10edc13c0a6933d40b049009",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
