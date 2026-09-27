export const name="share_reviews-fill";
export const id="dl_c50e506879c55bd77f0c";
export const url=new URL("../icons/share_reviews-fill.svg?v=1a2761e9bf78ce53d64719f7f852c05d1653d21b8426319019ebca38bcc64218",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
