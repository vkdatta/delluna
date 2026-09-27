export const name="feather-thin";
export const id="dl_93400f00ff764e52b40f";
export const url=new URL("../icons/feather-thin.svg?v=7b2e1a52c6429faa828215671761f0d6bf8da76f70ebb7236fdd076e05471394",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
