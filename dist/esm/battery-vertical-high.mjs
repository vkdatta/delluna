export const name="battery-vertical-high";
export const id="dl_6d61066b8d534f1e9955";
export const url=new URL("../icons/battery-vertical-high.svg?v=8a509324350777ff218a2dde21a0b144e13ad10a7cf4730d55e5f31d639b7992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
