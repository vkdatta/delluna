export const name="chalkboard";
export const id="dl_30acef9aed3248139e71";
export const url=new URL("../icons/chalkboard.svg?v=15dfaf1c489cfe394aa3c517878c16a90c8e3f9a81df9709a94379b75bb6e634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
