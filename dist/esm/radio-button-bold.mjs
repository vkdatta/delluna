export const name="radio-button-bold";
export const id="dl_def8bc92ca3c4491aa80";
export const url=new URL("../icons/radio-button-bold.svg?v=f98f12187729e80590e232efda3b7e0847d8a933f55e9ff1ebc846249dfbb08c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
