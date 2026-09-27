export const name="globe-hemisphere-west-bold";
export const id="dl_bebc114615c84a05b233";
export const url=new URL("../icons/globe-hemisphere-west-bold.svg?v=dbcc7af07efe0903c472a9ed40cc4bb771ab4ac46137791125af95413eb66a84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
