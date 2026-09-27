export const name="media_output_off-fill";
export const id="dl_33eebf8fb14734dbcc3f";
export const url=new URL("../icons/media_output_off-fill.svg?v=b263ee86385e783f1b51599ab6f0673426930ddf2e2b5aa49c622a0fd54b57eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
