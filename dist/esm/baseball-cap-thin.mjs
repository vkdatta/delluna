export const name="baseball-cap-thin";
export const id="dl_6522988c3f9b40ad97ba";
export const url=new URL("../icons/baseball-cap-thin.svg?v=63a7524ef8f8d1f88eadceb28af127d5039d9b102dba6e98c5dea0cde996f7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
