export const name="align_self_stretch-fill";
export const id="dl_f037a431e8c6a8289e96";
export const url=new URL("../icons/align_self_stretch-fill.svg?v=43332bd49a9455311b82ee4d2bb6b1cc06eaef0c8e7c94a5227a1c2b32cae5b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
