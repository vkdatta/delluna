export const name="parachute-fill";
export const id="dl_7f2dfc8098ab494eba03";
export const url=new URL("../icons/parachute-fill.svg?v=c3bbd71238746408e5f85b3c0d76751815fba177f9adba9d454713effbb46e66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
