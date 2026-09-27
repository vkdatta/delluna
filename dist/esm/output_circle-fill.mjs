export const name="output_circle-fill";
export const id="dl_5300e88bd2dca5b7a94a";
export const url=new URL("../icons/output_circle-fill.svg?v=e7301aa60025d5809ac6d484c96c655541359a2ebf71ce43449b5fc7cf2705ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
