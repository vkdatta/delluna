export const name="derivative";
export const id="dl_05742197d65b4747beca";
export const url=new URL("../icons/derivative.svg?v=02168d8382518b945a561bc2128b405b1abd0e4f3ffbc59cfa21f234ce511dad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
