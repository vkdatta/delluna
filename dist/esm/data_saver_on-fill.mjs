export const name="data_saver_on-fill";
export const id="dl_f286ae7982f3fce4f3bf";
export const url=new URL("../icons/data_saver_on-fill.svg?v=41fe2b06ee6dd88444a330712cf5b9c76a922caf35db6842701f33b6b984e772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
