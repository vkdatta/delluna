export const name="ulna_radius_alt";
export const id="dl_442878d57788e950b807";
export const url=new URL("../icons/ulna_radius_alt.svg?v=8be36079dcf31a278c61f2d3a19f29fac3f1e2f33e875bfde25a216ce8efcbd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
