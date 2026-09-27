export const name="sentiment_excited-fill";
export const id="dl_114fd00880fa07c26ea1";
export const url=new URL("../icons/sentiment_excited-fill.svg?v=db05e97c3168b74d9410fbf1c2f432b065db708badaa8e5e7ec774c0c1a79d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
