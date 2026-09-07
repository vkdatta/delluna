export const name="flag-pennant";
export const id="dl_61fe040a7055474abab7";
export const url=new URL("../icons/flag-pennant.svg?v=336df484ecf0410d3e904cafe309f1a2c1625835ec532714ed31c683cbc76ef1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
