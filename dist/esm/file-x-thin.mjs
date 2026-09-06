export const name="file-x-thin";
export const id="dl_5aa122091b114a75bb52";
export const url=new URL("../icons/file-x-thin.svg?v=1c8ecdf8c87b1a17250e7d8c2b579955da868ce401ff5b6a47a55f7dcd494536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
