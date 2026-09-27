export const name="fact_check";
export const id="dl_98b6810bb807e6af1d8f";
export const url=new URL("../icons/fact_check.svg?v=a699f398b151c3f9de9c2a883c873d7221c4b01f1ee84e29356cb45793879859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
