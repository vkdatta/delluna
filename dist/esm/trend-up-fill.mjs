export const name="trend-up-fill";
export const id="dl_7c7c935aa04ef346bf6d";
export const url=new URL("../icons/trend-up-fill.svg?v=721384b4e578c6ed9d0b21d5fc8550be02289705915a7507b25a20fcfa9961ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
