export const name="microbiology-fill";
export const id="dl_68bf4721f2179b858c76";
export const url=new URL("../icons/microbiology-fill.svg?v=031aa23db792036b342c05175e6a85a8d0037c88f8e5a764cbd8412f9fdbd757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
