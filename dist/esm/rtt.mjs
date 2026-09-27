export const name="rtt";
export const id="dl_0351f24a7379dac9e403";
export const url=new URL("../icons/rtt.svg?v=9e3124bc1769ed5afe0cc1e7643cd67756a2486d8d3964a15b46551dc634ac8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
