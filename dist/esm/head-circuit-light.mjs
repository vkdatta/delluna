export const name="head-circuit-light";
export const id="dl_405cdcb687c34a1cb3c5";
export const url=new URL("../icons/head-circuit-light.svg?v=50055caa70a0b182e7033619dd540108e0c07197283c93dc8f22db6f4b0de7de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
