export const name="notifications_paused-fill";
export const id="dl_c888c71f4e5fd627ab1f";
export const url=new URL("../icons/notifications_paused-fill.svg?v=a76c7947a922a84267f32f578c1a11cee6f8f5dd7364818f2341d504e39974d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
