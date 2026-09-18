export const name="looks_two-fill";
export const id="dl_4d17ddd165ef4745adc0";
export const url=new URL("../icons/looks_two-fill.svg?v=908012aad7871c494626d9661c57adce409a37d6afc11ad14709886b008b3111",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
