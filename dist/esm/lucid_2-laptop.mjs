export const name="lucid_2-laptop";
export const id="dl_e81313314c6348a09a9a";
export const url=new URL("../icons/lucid_2-laptop.svg?v=cdaceb85c6090c91f1f1ce65c1d3d1c445ff8e9b4e7e3b53db1165699897bd57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
