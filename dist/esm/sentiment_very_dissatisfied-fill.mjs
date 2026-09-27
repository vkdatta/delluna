export const name="sentiment_very_dissatisfied-fill";
export const id="dl_b2e87f6112550798ab94";
export const url=new URL("../icons/sentiment_very_dissatisfied-fill.svg?v=bdd58be9f103c3c1d64fbfa76a2c207db13cd65605f65262d1fc551f62fdeb97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
