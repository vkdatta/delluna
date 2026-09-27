export const name="pulse-light";
export const id="dl_e1e7a3a679294a3f836a";
export const url=new URL("../icons/pulse-light.svg?v=f719df9c8fa4ff0d258ccc3b5859c3c6dba55e71911e785a7eed1bbddd4bf3ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
