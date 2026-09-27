export const name="briefcase-metal";
export const id="dl_fb7de842f9614816b71a";
export const url=new URL("../icons/briefcase-metal.svg?v=c598a8ab64621a01afdd46144ba2251f390a023e5b135dc49687296a94322c26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
