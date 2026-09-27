export const name="background_dot_small";
export const id="dl_ec20f2def549abe31dc6";
export const url=new URL("../icons/background_dot_small.svg?v=49cdb75b062ee66a2f23c4f72a8b1fe932cac88e9bda7c02cbe932d4e7835960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
