export const name="cards_stack-fill";
export const id="dl_99584130dfb035d07f5f";
export const url=new URL("../icons/cards_stack-fill.svg?v=27dae9d1e05787a29d73ec82f7f0c009765501a1463ef0bb6ff891104d98b584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
