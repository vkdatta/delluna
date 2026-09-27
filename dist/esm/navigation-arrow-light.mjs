export const name="navigation-arrow-light";
export const id="dl_079282456aea4d88944b";
export const url=new URL("../icons/navigation-arrow-light.svg?v=0dde2031dbe37f3d4f78fe5b4124dda0a8406263260625afabe9d27a1f9da4eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
