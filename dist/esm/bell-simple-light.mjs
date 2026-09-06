export const name="bell-simple-light";
export const id="dl_d33c2eae36ae43e8874a";
export const url=new URL("../icons/bell-simple-light.svg?v=c6994ea00cf872c5ed2850031069bb85fdc21974ccd03c6dc05298252e055115",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
