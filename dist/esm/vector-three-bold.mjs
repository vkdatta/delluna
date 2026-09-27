export const name="vector-three-bold";
export const id="dl_f9a0f4bd72b170936134";
export const url=new URL("../icons/vector-three-bold.svg?v=8648dbb7207589b216e32ffd4cc50466a0c6ef2840ce434bba9e31fcb4fa9a2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
