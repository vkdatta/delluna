export const name="link-simple-break-light";
export const id="dl_39c78a0346a14d4eb3ea";
export const url=new URL("../icons/link-simple-break-light.svg?v=88d23acce05e45ebc29dcbcf35714799546258443f8fe376aa1aab649fdf51d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
