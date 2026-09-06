export const name="airplane-tilt-bold";
export const id="dl_7e498ec8b828476891a9";
export const url=new URL("../icons/airplane-tilt-bold.svg?v=f45b2e8bc936d3dcf699555bb787f7ff1ab7829b0997672e6bb14bde1ac41be4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
