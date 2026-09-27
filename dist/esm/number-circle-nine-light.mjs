export const name="number-circle-nine-light";
export const id="dl_e7c5d636e5be4ead9b25";
export const url=new URL("../icons/number-circle-nine-light.svg?v=6d1fb5296fae05b601fe79137468c0a7132c717c37660dde49f466d8eed0fb68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
