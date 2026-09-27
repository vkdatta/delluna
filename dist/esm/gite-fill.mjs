export const name="gite-fill";
export const id="dl_2ea26540b1c40917356f";
export const url=new URL("../icons/gite-fill.svg?v=e8e616624102f2809c575682ea34d7eb8f88e7de8185ce92369bede8932dab7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
