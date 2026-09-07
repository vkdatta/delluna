export const name="feather-duotone";
export const id="dl_aa31c2e3f9604c888654";
export const url=new URL("../icons/feather-duotone.svg?v=11031cf6db69790eef8c54e4764b37517d929f2668119128a9cd21feb42c328e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
