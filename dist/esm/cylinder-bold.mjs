export const name="cylinder-bold";
export const id="dl_cba4daf3ed524cad9f5f";
export const url=new URL("../icons/cylinder-bold.svg?v=4aae8ec11dd70e2293dc648583470bc7a5c575bc1e808ce1a496fbeeaba5f58b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
