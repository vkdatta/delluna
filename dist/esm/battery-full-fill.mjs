export const name="battery-full-fill";
export const id="dl_cfe0ac948cc34e0d90ee";
export const url=new URL("../icons/battery-full-fill.svg?v=a2c584f4b61dd70416eb869a3024ea0b3e08a8357b6f89e7d4c2215bb2d3faa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
