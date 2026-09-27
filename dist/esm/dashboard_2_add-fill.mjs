export const name="dashboard_2_add-fill";
export const id="dl_0442369afa9f3cb6f58f";
export const url=new URL("../icons/dashboard_2_add-fill.svg?v=31e437c3cbf418e49c4bad49c0ab9d768202f55efa3b2f53da5706bf9a46ffca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
