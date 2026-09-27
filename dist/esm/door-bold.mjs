export const name="door-bold";
export const id="dl_349553dc27924f7da88b";
export const url=new URL("../icons/door-bold.svg?v=2a359513de02c8a536ac5fd03fcbad7227e437497c9eebdc88ad3b18643b358d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
