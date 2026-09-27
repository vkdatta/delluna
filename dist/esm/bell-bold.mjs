export const name="bell-bold";
export const id="dl_7e3b896a7bef4fe7ac1a";
export const url=new URL("../icons/bell-bold.svg?v=ee7d00dea3beb168a4b5742dd28cd404c7c63ad8f1e438cc225e1e9a77ce78e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
