export const name="shower";
export const id="dl_875d7469b7b2a2283893";
export const url=new URL("../icons/shower.svg?v=a448c4f5216162e1e2d2e65f00b933a8ed7c58c584fe41536859c4236e26be9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
