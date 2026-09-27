export const name="library_add_check";
export const id="dl_37194c26b33614913eaa";
export const url=new URL("../icons/library_add_check.svg?v=8c65eecac163294c5287aef3d665976444d03bf96e5c7c856f342e279344db3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
