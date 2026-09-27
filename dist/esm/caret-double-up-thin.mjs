export const name="caret-double-up-thin";
export const id="dl_b67ad56b64d146eaa7d8";
export const url=new URL("../icons/caret-double-up-thin.svg?v=039249f35c4ace5fc268ddd3adf6078517b3354b182e753743be9b4743332a4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
