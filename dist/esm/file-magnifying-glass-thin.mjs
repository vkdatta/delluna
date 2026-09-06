export const name="file-magnifying-glass-thin";
export const id="dl_4e7e377086a7496fb9f1";
export const url=new URL("../icons/file-magnifying-glass-thin.svg?v=73e446ceefcd321a9387e445b0eb5ec0a80c33693cad6b4e4e400d6304a6b244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
