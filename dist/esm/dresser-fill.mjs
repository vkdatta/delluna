export const name="dresser-fill";
export const id="dl_b17730e34cb5479ba06f";
export const url=new URL("../icons/dresser-fill.svg?v=085a5e2cb20320cd0c87c22d797f83c7824fe980db322ce67124bd470d4b4436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
