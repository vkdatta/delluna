export const name="phone-pause-fill";
export const id="dl_a10f9d2738d64794b818";
export const url=new URL("../icons/phone-pause-fill.svg?v=83073e995886ffab11d0eee7e4a1dce4ef4bebc3f867d8d6835247f74a1682bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
