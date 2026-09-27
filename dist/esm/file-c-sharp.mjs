export const name="file-c-sharp";
export const id="dl_7b233248abcc4098909f";
export const url=new URL("../icons/file-c-sharp.svg?v=dd54f54819b5139f8039342bddbb793cddcad25ba8ec83e3893a3768bbcca978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
