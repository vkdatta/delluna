export const name="developer_mode_tv-fill";
export const id="dl_b26ecd82e566e1bb3a90";
export const url=new URL("../icons/developer_mode_tv-fill.svg?v=905c926587fbed63cc6db49341ed7f69f670d62ce091aa67856ff12c7f2888b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
