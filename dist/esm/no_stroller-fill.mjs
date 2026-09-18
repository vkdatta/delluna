export const name="no_stroller-fill";
export const id="dl_3582289446074dd8bb27";
export const url=new URL("../icons/no_stroller-fill.svg?v=e88f09969cff118400a6698570c298800efa9261e13422266a78822651870a54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
