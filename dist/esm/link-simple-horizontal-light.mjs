export const name="link-simple-horizontal-light";
export const id="dl_6de52108828e4583b779";
export const url=new URL("../icons/link-simple-horizontal-light.svg?v=ea61ae701044bbe0ea3d95a1a37b4597bc002b83b5ca6370f0a0dca8cd71b9b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
