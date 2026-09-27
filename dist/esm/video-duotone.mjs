export const name="video-duotone";
export const id="dl_43c7a88608b9c22fe3bc";
export const url=new URL("../icons/video-duotone.svg?v=4ed138804c166ce9c582326f20f6356b44aa4b09880b65c7498ef8bdbca6e0f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
