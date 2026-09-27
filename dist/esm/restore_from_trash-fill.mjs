export const name="restore_from_trash-fill";
export const id="dl_54432adfe3410ff11db5";
export const url=new URL("../icons/restore_from_trash-fill.svg?v=776ff1d16b3bb311e5a705901fa9694c0cc1c8928a967797fc36f683a791480f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
