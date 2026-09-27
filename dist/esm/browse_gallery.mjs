export const name="browse_gallery";
export const id="dl_778936ca61592359ecaf";
export const url=new URL("../icons/browse_gallery.svg?v=8752a8d5d33475b259d96fb93b60086da11ed33a934f42cadf57d9db1c7bf464",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
