export const name="triangle_circle-fill";
export const id="dl_51aeb4b6792c9aff59ca";
export const url=new URL("../icons/triangle_circle-fill.svg?v=9b1d272e4230cb97a5da8252a7d6bb0ba7974a9709b1933c5a77bbf26abf2861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
