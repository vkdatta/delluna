export const name="arrow_up";
export const id="dl_8f03a8201e22487cabda";
export const url=new URL("../icons/all_60_named_svgs/arrow_up.svg?v=8df7e66235eea84a53011014f3e0e36a8e272028f0e1f34be94b0d67545d4e33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
