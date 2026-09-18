export const name="tv_off-fill";
export const id="dl_dd09a68265364d7ea810";
export const url=new URL("../icons/T/tv_off-fill.svg?v=57144d26d65d641e900da326ef2e23903116fc5945584ddf2545847bcf7b21a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
