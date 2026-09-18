export const name="timelapse-fill";
export const id="dl_f762d2d98bf2421386e2";
export const url=new URL("../icons/timelapse-fill.svg?v=9f915e5be32ee431a4b7f02620a5bec42834fb6de02a672036631c72510b46e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
