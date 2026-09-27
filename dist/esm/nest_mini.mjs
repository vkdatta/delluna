export const name="nest_mini";
export const id="dl_c3a085959244be47b4cc";
export const url=new URL("../icons/nest_mini.svg?v=617b366bca554e743f63d2932c6265e376a0d7d72750232d956c30090fd9478d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
