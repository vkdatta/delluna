export const name="align-center-horizontal-simple-thin";
export const id="dl_692b2ca677b144e3b522";
export const url=new URL("../icons/align-center-horizontal-simple-thin.svg?v=067d02c5cf385502cba63810a6e279cc897d0f10cfe8f06d72dded0a87b265cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
