export const name="arrows-clockwise-thin";
export const id="dl_19ca5ceb5cdc4869b021";
export const url=new URL("../icons/arrows-clockwise-thin.svg?v=ef637d8826fe6e7fbd3b692b3891bfee0aed4808c38ef7dfb3fa1184300df007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
