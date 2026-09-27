export const name="lucid_1-calendar-clock";
export const id="dl_007297fd1391493da0bc";
export const url=new URL("../icons/lucid_1-calendar-clock.svg?v=73daf058764af47ddc40e5c72c1569a3b73d4ab6acd4df1e2df68e4e41e1181f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
