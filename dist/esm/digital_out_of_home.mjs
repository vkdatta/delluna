export const name="digital_out_of_home";
export const id="dl_52909054cd4c6e6143f9";
export const url=new URL("../icons/digital_out_of_home.svg?v=4536aac14eace7756e48e282e817e95bb231d9d4d436ea182e222d459cb3eb05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
