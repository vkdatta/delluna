export const name="link-simple-horizontal-break";
export const id="dl_6884bb6b9ecb431a9856";
export const url=new URL("../icons/link-simple-horizontal-break.svg?v=0247018246664ab53875e87911d1c2486a8ed3096c23359cf843a52149da59c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
