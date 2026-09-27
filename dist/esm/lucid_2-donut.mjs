export const name="lucid_2-donut";
export const id="dl_74d684cfd1f042508cfb";
export const url=new URL("../icons/lucid_2-donut.svg?v=346196751977aed38debdfb1274691619ff9c47fa294240f44879e5db7d57f20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
