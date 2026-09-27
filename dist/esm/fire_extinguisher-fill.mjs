export const name="fire_extinguisher-fill";
export const id="dl_195ca445edbb82e607a1";
export const url=new URL("../icons/fire_extinguisher-fill.svg?v=8219fb551f8f73494af31a4eff96293c0119a2fc011bedec4a5425b07f3b2a03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
