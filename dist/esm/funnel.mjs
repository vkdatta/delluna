export const name="funnel";
export const id="dl_98638a512ed84237bcf7";
export const url=new URL("../icons/funnel.svg?v=26b847aa9f8566707443669502dcf08bf0a2d1d3cfb2dc1136842f4033104abb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
