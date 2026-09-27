export const name="disc_full-fill";
export const id="dl_081975235bb9c71c07d4";
export const url=new URL("../icons/disc_full-fill.svg?v=c44fba347e39f375e01d7c039a9a5b22e6e256755d7463bb5efeff9262d5f78a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
