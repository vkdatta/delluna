export const name="counter_2";
export const id="dl_7e2419e25f1d3494b115";
export const url=new URL("../icons/counter_2.svg?v=7a445561c09f6989974d0f47872a05593965cb8107ca8254c93c2bb46b7a65d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
