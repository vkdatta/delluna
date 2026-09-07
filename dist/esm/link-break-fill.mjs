export const name="link-break-fill";
export const id="dl_f35cdb4c197f46deb201";
export const url=new URL("../icons/link-break-fill.svg?v=ce31ba3b40302d3cbe979a322c9c1b1d6ccfa8529669dd4303d4fa1932866864",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
