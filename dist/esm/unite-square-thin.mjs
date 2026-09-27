export const name="unite-square-thin";
export const id="dl_f2dffe8a5e0199acda28";
export const url=new URL("../icons/unite-square-thin.svg?v=a6ca77844613b257f2aa31fdeb29377557263e685c7458323b742febff191c34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
