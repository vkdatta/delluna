export const name="lucid_2-folder-output";
export const id="dl_d3ed441724204107b422";
export const url=new URL("../icons/lucid_2-folder-output.svg?v=3bb98c5205204da8bcd40204415893773903e2ec8478861462693925a455888d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
