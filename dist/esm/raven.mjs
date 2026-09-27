export const name="raven";
export const id="dl_31403679e0ce29265d23";
export const url=new URL("../icons/raven.svg?v=950a459617e6d3827961fbdcb4eafcc0030029d361e09b9afb3f2009e2067941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
