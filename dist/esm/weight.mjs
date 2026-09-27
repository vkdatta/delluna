export const name="weight";
export const id="dl_2de7b198099946519105";
export const url=new URL("../icons/weight.svg?v=8405732c4a9d632dcc517f39e4191eafe8364fe2332f6b5f5e031d459ed6148b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
