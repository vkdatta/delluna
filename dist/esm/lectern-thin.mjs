export const name="lectern-thin";
export const id="dl_2fb3039ab59b4295a03d";
export const url=new URL("../icons/lectern-thin.svg?v=3223bfbfb2879c01cb2f12f500799b0a9148440c436e383f72446707c4172570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
