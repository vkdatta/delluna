export const name="crop_landscape";
export const id="dl_da9a1d026dfa25ff3638";
export const url=new URL("../icons/crop_landscape.svg?v=732d8af84af1816ea8f3e0b1a50d2da7ab6d1cc43c2f1a43919bc300ffcb705c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
