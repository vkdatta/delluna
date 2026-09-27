export const name="note-bold";
export const id="dl_3634c037ea90455d8c0a";
export const url=new URL("../icons/note-bold.svg?v=43b5aa36f2cfe38343ad6d4a3f459331c1006d730759fcfa1d5d7745ec36b520",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
