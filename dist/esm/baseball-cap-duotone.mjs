export const name="baseball-cap-duotone";
export const id="dl_b1e387904629417a92f4";
export const url=new URL("../icons/baseball-cap-duotone.svg?v=b8e4c206805e0807867c0562d283ced507dbd51dd5b51f8ea7a41a52ec3e5210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
