export const name="user-check-light";
export const id="dl_d5bf7a7e71204ce9a222";
export const url=new URL("../icons/U/user-check-light.svg?v=0debd6b5ab98475d92ce11cb579f0cccd38aca1750b6802c0b9747b5b7d2afbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
