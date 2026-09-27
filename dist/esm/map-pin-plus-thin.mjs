export const name="map-pin-plus-thin";
export const id="dl_7db1dd90bc3a43c5b1cf";
export const url=new URL("../icons/map-pin-plus-thin.svg?v=a22b225561d3712206f75bbb8af5c59acb042de1717933ee04a64f9205074a07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
