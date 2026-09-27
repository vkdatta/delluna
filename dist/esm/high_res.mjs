export const name="high_res";
export const id="dl_2eace16471b30fb9e90f";
export const url=new URL("../icons/high_res.svg?v=4f575d7bc760c02e076619def5a28c3a19651e87efe03fcac95ed30db7500f22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
