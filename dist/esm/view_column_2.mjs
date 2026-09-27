export const name="view_column_2";
export const id="dl_bf15f24686471b9d8bef";
export const url=new URL("../icons/view_column_2.svg?v=fe74ad2cce587b43607d35978a3ff05c25648247602e953b1db035ba57c2acfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
