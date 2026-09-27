export const name="text-subscript-fill";
export const id="dl_cb3be9f85ea2013d76e9";
export const url=new URL("../icons/text-subscript-fill.svg?v=9b37339df03d4203ce7a89f821cb009532526283598de4fbdc9c31ed95975c26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
