export const name="nest_display-fill";
export const id="dl_a4633157d04747e2a3bd";
export const url=new URL("../icons/nest_display-fill.svg?v=eb35334bad471ed7b09d185d0843aa251f4a89e5a45c046001033abe3a48f565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
