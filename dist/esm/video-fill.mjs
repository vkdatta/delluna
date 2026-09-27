export const name="video-fill";
export const id="dl_1f6f2b6d316f77498d1c";
export const url=new URL("../icons/video-fill.svg?v=fdab533c6e2cab60e88fef2630a4ca9990a535aa40d9cc9a5b08c74c8aa01812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
