export const name="comment_bank-fill";
export const id="dl_77b983928a228c359d42";
export const url=new URL("../icons/comment_bank-fill.svg?v=125cd4adfeae13f0555053e79846628daabf38ebd89c5a719428cac1ea5d6f5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
