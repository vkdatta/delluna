export const name="shower-duotone";
export const id="dl_8294edeb53eb4942ed6f";
export const url=new URL("../icons/shower-duotone.svg?v=08f7745aef7610c4c33bfb4dc3f74bc5dc91ea92af92c79c6ef595f854e58a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
