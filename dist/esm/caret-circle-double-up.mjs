export const name="caret-circle-double-up";
export const id="dl_8357173efe4f42b18d2d";
export const url=new URL("../icons/caret-circle-double-up.svg?v=bd9af6ab888c29b702a7e1995784f536ef7734c45774d0303d9556adca714828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
