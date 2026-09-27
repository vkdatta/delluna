export const name="waves-horizontal";
export const id="dl_99504ee65e1d456e892a";
export const url=new URL("../icons/waves-horizontal.svg?v=8abee631392c1b927a99f3b73aee7e821a834ca713cf8e2b6c83001a9f09ef94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
