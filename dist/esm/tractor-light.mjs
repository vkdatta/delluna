export const name="tractor-light";
export const id="dl_e51ac49dae2a27eabb90";
export const url=new URL("../icons/tractor-light.svg?v=d71b224680d8c255edd941e9d279e822e19de1a05aa1fc865ce6129e1dccb9f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
