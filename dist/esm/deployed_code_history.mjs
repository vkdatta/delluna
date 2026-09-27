export const name="deployed_code_history";
export const id="dl_3d1c595f077a0e89d5c3";
export const url=new URL("../icons/deployed_code_history.svg?v=2bb17875ce5db15dc61fd22a3ee1d0a02d626fffc20e3305d0dc91816df078c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
