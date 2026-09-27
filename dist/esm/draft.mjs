export const name="draft";
export const id="dl_070e327c16a12c544dd6";
export const url=new URL("../icons/draft.svg?v=f72be5423eb79664d0774e76b1884fb186445555e2fadbd00fc527edd6936599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
