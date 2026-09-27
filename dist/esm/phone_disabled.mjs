export const name="phone_disabled";
export const id="dl_17fb0cd3c1f96e49fb31";
export const url=new URL("../icons/phone_disabled.svg?v=8ee44daf50c936af03eeee2ed3e6a6f0696d76e651bb47efee2abf8d47856ef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
