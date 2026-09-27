export const name="pacemaker-fill";
export const id="dl_4de1999fce0479b2fa67";
export const url=new URL("../icons/pacemaker-fill.svg?v=774aea785658dd51593dd16f8c59cfc7a303d7b52693f6035f1bd9d79d89f2fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
