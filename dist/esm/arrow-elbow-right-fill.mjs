export const name="arrow-elbow-right-fill";
export const id="dl_ad5ba154db9149968291";
export const url=new URL("../icons/arrow-elbow-right-fill.svg?v=beb34b88ea5eb99509959c92c311548a7c2cc66bdaace4e8457e1437dce758b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
