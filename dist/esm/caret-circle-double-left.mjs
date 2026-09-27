export const name="caret-circle-double-left";
export const id="dl_3c43084db9bf430189f5";
export const url=new URL("../icons/caret-circle-double-left.svg?v=f55b3bd50e80c2c5736841f52f1438fade6d767e6df31c677ebb4148933faad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
