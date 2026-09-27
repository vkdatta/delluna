export const name="arrow-elbow-down-left";
export const id="dl_34a779d9c393480192dc";
export const url=new URL("../icons/arrow-elbow-down-left.svg?v=2c5d9ff7652aa2d0496d04e32dfccfac0ef584b67e0955ea40b230d1ac1db9fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
