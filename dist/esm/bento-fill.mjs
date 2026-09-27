export const name="bento-fill";
export const id="dl_6fae1f2539dac37991f8";
export const url=new URL("../icons/bento-fill.svg?v=610cb14abef21284be0866c50f757ef811ecc4f849470eb5cb9a83f70ad0e01b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
