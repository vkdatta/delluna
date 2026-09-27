export const name="person-simple-tai-chi-duotone";
export const id="dl_145ef324112f4701acee";
export const url=new URL("../icons/person-simple-tai-chi-duotone.svg?v=4e93d52d21fc77b53fb71849348e6ab13425a80f5e7baa9cc083a2f3787bdab7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
