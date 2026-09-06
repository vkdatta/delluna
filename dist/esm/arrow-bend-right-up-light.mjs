export const name="arrow-bend-right-up-light";
export const id="dl_6194a7e37c8f410aaccb";
export const url=new URL("../icons/arrow-bend-right-up-light.svg?v=469eb98cabc70c4beb9ce8c24f4c7d2c9edf38b97678b4a726df8c7819f8d5a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
