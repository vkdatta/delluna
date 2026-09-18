export const name="table-fill";
export const id="dl_38df9cc5f000468db216";
export const url=new URL("../icons/table-fill.svg?v=29c14528ea52b4d08d1d22545b14aee3671a5fbe3e328a2421cb26467c32812b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
