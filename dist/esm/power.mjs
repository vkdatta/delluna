export const name="power";
export const id="dl_6e3c8368db7d483ba839";
export const url=new URL("../icons/power.svg?v=a71fd03538bb8d74e71cf0fe89c70e7f8d3d6bd68cbb5e43dc154ab0dbf06970",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
