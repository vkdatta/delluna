export const name="variable";
export const id="dl_e2eb6a5caf104450b65d";
export const url=new URL("../icons/variable.svg?v=d52036d774def06df1b19a5c6a10087a665a0f866c577205ffbae58a95c494a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
