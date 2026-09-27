export const name="square-split-vertical-fill";
export const id="dl_644dcb393b15b22cf7fd";
export const url=new URL("../icons/square-split-vertical-fill.svg?v=58dfcaa335c5a373ff6a6f8e9f081494374831bf10f38ed5376de95c312ebd65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
