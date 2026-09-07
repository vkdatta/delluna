export const name="superset-proper-of-thin";
export const id="dl_fd7486c7928f479f93cb";
export const url=new URL("../icons/S/superset-proper-of-thin.svg?v=21e6f9aa95a604075dfb2cf066c503a738da90933ebc3caed40e3577e7b1942d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
