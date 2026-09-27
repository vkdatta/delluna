export const name="path";
export const id="dl_4a7453390b5c471986c0";
export const url=new URL("../icons/path.svg?v=8b192619546f885711ce15d936ffb2e3a47269243725d18d027445010cffc0c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
