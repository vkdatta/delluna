export const name="cake-bold";
export const id="dl_ee02977204cf4ecbba6f";
export const url=new URL("../icons/cake-bold.svg?v=cef116a4ed7a3a9f8309f14bbbc5694de847142d9730d91f0669bcd3e6993916",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
