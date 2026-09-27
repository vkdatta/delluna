export const name="vertical_align_center-fill";
export const id="dl_7c6b309eea0c54bb6539";
export const url=new URL("../icons/vertical_align_center-fill.svg?v=e87e66a264b825d4ad8925dc0e50cc81dd798984ef8b6ae0c2a9a956a4562bb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
