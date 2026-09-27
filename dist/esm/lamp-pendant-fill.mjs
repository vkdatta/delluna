export const name="lamp-pendant-fill";
export const id="dl_25bf28ad533648acbfea";
export const url=new URL("../icons/lamp-pendant-fill.svg?v=19161d53509bc401460d21f607b8a6f9ed1cf1a18549a1c50673286084eccc2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
