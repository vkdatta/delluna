export const name="meteor-thin";
export const id="dl_a6c18ce80aa24823a414";
export const url=new URL("../icons/meteor-thin.svg?v=96a021c0804497115e165dbc38e95276905efb4d4f41a25bb0574c0b1c6356b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
