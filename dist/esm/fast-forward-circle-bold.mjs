export const name="fast-forward-circle-bold";
export const id="dl_f374586147a04fe7be17";
export const url=new URL("../icons/fast-forward-circle-bold.svg?v=61dcdfaa0cb516e6c3d85216298f8adc9aba3d1add479e35a50e76dd1ea93f50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
