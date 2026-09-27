export const name="corners-out-light";
export const id="dl_3bc9b2b9ed334428a629";
export const url=new URL("../icons/corners-out-light.svg?v=9b176e224d9858b870db72ccd32153df5e75e6cf5bfefeccbd6e7df354231b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
