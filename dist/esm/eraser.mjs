export const name="eraser";
export const id="dl_f066ee01b0344e3481b0";
export const url=new URL("../icons/eraser.svg?v=3e2e2a1f466051a32abed16cd8e6eadf30f9c560aeb6dcf2545f9c8a95ddfdef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
