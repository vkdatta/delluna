export const name="lucid_3-radio";
export const id="dl_a642c989a50b414da657";
export const url=new URL("../icons/lucid_3-radio.svg?v=bba964988dcc5b5bc61ef32b8098b473c4c8a1d96e2129d21c5e86dbe9b28d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
