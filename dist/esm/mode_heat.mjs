export const name="mode_heat";
export const id="dl_e5a609a460b131cac6c3";
export const url=new URL("../icons/mode_heat.svg?v=d87d1dca3ebb3bfc4cc8b0240227dc37bc2cc45d4ceb96bd3f1fa86b9c297ff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
