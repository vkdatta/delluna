export const name="lucid_2-key-round";
export const id="dl_5deb514eedcd4abc86c6";
export const url=new URL("../icons/lucid_2-key-round.svg?v=60b2c665deb9db747d3386abfc0d33f15f5b48fc87a77babd6d5a0ce84467a1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
