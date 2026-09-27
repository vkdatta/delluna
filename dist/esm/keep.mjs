export const name="keep";
export const id="dl_9776ff7210a6b2a4f096";
export const url=new URL("../icons/keep.svg?v=00386add235c963b885c680ff944ef22bc852089e2634ac1c68355b5ee9e98b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
