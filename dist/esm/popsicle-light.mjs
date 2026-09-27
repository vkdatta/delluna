export const name="popsicle-light";
export const id="dl_2f8413dc165e45f0a41e";
export const url=new URL("../icons/popsicle-light.svg?v=b52ce4051d7ecc5cf1c37f00113006e43b001e8b4b282f45c7a93c4d7e326ab7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
