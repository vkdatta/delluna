export const name="lucid_3-message-circle-heart";
export const id="dl_3a6e94e4b72440059e66";
export const url=new URL("../icons/lucid_3-message-circle-heart.svg?v=7f69d2577449622edee3222910bd3d02bebb84d3f128c1fb64003bce173c43c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
