export const name="github-logo";
export const id="dl_898b857751fe4506ba61";
export const url=new URL("../icons/github-logo.svg?v=eec5e2120017580de1e12f638488a0231478c02f1f404cfee8b4ff9e6bcce7ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
