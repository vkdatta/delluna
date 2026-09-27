export const name="vignette_2-fill";
export const id="dl_a681c721064459bde833";
export const url=new URL("../icons/vignette_2-fill.svg?v=2118bec0f7aa4e3ff1d4b18eaab7f246c29dfd18f098b551364c1b02a8bdf091",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
