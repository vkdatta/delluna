export const name="cloud_done";
export const id="dl_789867fb4bb679ef74da";
export const url=new URL("../icons/cloud_done.svg?v=9d345458b565f57131eb9760cf4127445c4278ddbaf2af2bf894d1008764df4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
