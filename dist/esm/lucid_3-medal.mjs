export const name="lucid_3-medal";
export const id="dl_75912f7af3ef4f368fec";
export const url=new URL("../icons/lucid_3-medal.svg?v=90d4811466159ce4c35e96b53515ff39bac55e8d2ef2a135cd741fa712ec62da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
