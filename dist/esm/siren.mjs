export const name="siren";
export const id="dl_ded2b661df0ebd559dd3";
export const url=new URL("../icons/siren.svg?v=4aee9792fae5c96a2faab5081a04ea0cdbb54dda0151d9fcb107db379bf2a843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
