export const name="arrow-circle-down-left";
export const id="dl_3a0bc440acb64d848aec";
export const url=new URL("../icons/arrow-circle-down-left.svg?v=fe4771b027d5b0733cbc98f5b67347b078ef64e9b627fa400b72e09702db99ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
