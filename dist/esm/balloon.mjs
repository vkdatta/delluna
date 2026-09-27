export const name="balloon";
export const id="dl_91eaf487d8364b109eb9";
export const url=new URL("../icons/balloon.svg?v=c8642b2e11b5511a083448cdfbc87dcf82d5cdb418f6d73e3dd21ae1f68eef78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
