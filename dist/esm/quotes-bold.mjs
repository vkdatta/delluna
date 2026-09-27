export const name="quotes-bold";
export const id="dl_7d6890f21c2d475b84ff";
export const url=new URL("../icons/quotes-bold.svg?v=d1a8dca31f4e2608716ff8dac78baff5eda3cb017c19287de87dc3bd796c23a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
