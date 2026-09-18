export const name="surfing";
export const id="dl_08ff62bd14cd4e649bd1";
export const url=new URL("../icons/surfing.svg?v=617025cad5e1ceb7a8f18933c85d1a0358594582b07f0f1fbbba37d3c82b2340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
