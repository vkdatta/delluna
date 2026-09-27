export const name="oncology";
export const id="dl_ce806e55a6e0ee25c85c";
export const url=new URL("../icons/oncology.svg?v=e3c09c4ab877fed806f71f6d7aee7329eaa95fcc7e18a36ec476195697f9d6b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
