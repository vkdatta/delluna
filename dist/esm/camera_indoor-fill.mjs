export const name="camera_indoor-fill";
export const id="dl_cbb958b8683b4e73b471";
export const url=new URL("../icons/C/camera_indoor-fill.svg?v=4a44da4334392fda5bc9444b9d41e7bc2069cbfcee5c1e4e068f58e9fc78d245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
