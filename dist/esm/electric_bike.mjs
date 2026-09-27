export const name="electric_bike";
export const id="dl_cf1c9a694dee8399b102";
export const url=new URL("../icons/electric_bike.svg?v=cba40d51f62f2fd50e6f2d44dc047115b9e737c199c19dbb97b22a6a4b16e975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
