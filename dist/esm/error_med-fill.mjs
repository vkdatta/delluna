export const name="error_med-fill";
export const id="dl_4c6e68a16341737a1700";
export const url=new URL("../icons/error_med-fill.svg?v=70b5ca4df93c1449d0a1576487b83eef645701d49ff90c3f94f86e97d65dbae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
