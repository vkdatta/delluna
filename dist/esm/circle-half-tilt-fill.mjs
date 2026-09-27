export const name="circle-half-tilt-fill";
export const id="dl_c3c7ec06105b42bd9348";
export const url=new URL("../icons/circle-half-tilt-fill.svg?v=ed4251ca25d580b7fcc6713a20f610a0d0087fab2a49896d7a4d70bb91995ffa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
