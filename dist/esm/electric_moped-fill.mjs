export const name="electric_moped-fill";
export const id="dl_1c73767f58be86bfd015";
export const url=new URL("../icons/electric_moped-fill.svg?v=d9206299fe378e7964d72ebdb15cb08858b7560e5f6b8a81136057393814e4f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
