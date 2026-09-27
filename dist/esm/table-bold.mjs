export const name="table-bold";
export const id="dl_d17830e7816e2634c5f3";
export const url=new URL("../icons/table-bold.svg?v=e3e78762dcadf15ec470f57e1bfaaf5ece616cfe66797579d83da81324fc7499",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
