export const name="add_row_below";
export const id="dl_3161d661d12233a0fbaa";
export const url=new URL("../icons/add_row_below.svg?v=9235d7c075a2dbfdf8bf8760fefec64701e17cb9852def1b586ed0c4db3d5107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
