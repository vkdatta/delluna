export const name="flag-checkered-light";
export const id="dl_bd502b5d3369470c98f8";
export const url=new URL("../icons/flag-checkered-light.svg?v=1f0607589dc6e725a3b69f81f49eb9e5177da110f6485c64a964ba5d73c21d9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
