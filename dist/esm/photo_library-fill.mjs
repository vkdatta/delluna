export const name="photo_library-fill";
export const id="dl_be104a5675676f85fa69";
export const url=new URL("../icons/photo_library-fill.svg?v=8fda1ce093e0ba3462c001e07cf2d3a2c9d57e88d2a351a208ffe559d07b2528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
