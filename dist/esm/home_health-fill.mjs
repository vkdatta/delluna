export const name="home_health-fill";
export const id="dl_8328c9a1a8d46ec99164";
export const url=new URL("../icons/home_health-fill.svg?v=a77df2fd1a848ba650914b911b15981b2aa49b683554650544911c67be32e420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
