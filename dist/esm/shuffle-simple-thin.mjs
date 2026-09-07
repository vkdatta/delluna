export const name="shuffle-simple-thin";
export const id="dl_2128ec7911ee4ddcb09f";
export const url=new URL("../icons/S/shuffle-simple-thin.svg?v=0e763de60fe262f214235aba369040d00641a566fec1a4de3d05f2f03688b5ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
