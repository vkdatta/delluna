export const name="pants-bold";
export const id="dl_da4cf698c9e348c3b84d";
export const url=new URL("../icons/pants-bold.svg?v=0e9e92a0b96a8eee662f75b843dad80bb45ea064c4847190a51d7fb1b52ba508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
