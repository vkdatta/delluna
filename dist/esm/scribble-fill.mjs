export const name="scribble-fill";
export const id="dl_eb9a502d6cb12f6e72bb";
export const url=new URL("../icons/scribble-fill.svg?v=b1b537992ffb47d0b8fe792cb4852d2a27061ff5e72c62c3d70ff16e14cd68b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
