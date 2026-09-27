export const name="stretch-horizontal";
export const id="dl_bc7bf82fdc7a4947905d";
export const url=new URL("../icons/stretch-horizontal.svg?v=aa7b72063708ea0454d954947f9845d8b2804c6ca2b2f9e337234925aa67bd48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
