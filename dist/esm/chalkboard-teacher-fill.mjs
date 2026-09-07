export const name="chalkboard-teacher-fill";
export const id="dl_e70b9767cf7d499eac9e";
export const url=new URL("../icons/chalkboard-teacher-fill.svg?v=c1554f6f9da4ecdce4bb30c298bf1e53a70429a7e6abfa7bcd728128ad0d6ec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
