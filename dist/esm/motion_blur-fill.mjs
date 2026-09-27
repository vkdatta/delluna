export const name="motion_blur-fill";
export const id="dl_45a18db97d3cbce5e044";
export const url=new URL("../icons/motion_blur-fill.svg?v=105373548ff73f14411624dabc791a367d37f5f7aec876b60e50883c70136c01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
