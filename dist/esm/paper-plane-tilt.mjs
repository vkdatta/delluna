export const name="paper-plane-tilt";
export const id="dl_b25434ad073d45ca80d0";
export const url=new URL("../icons/paper-plane-tilt.svg?v=0dbff2ada31c963dfd95bfe2ab2cb39a90fe7100eb7c1724577444a1d8a7c26d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
