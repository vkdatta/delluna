export const name="videocam-fill";
export const id="dl_3fbd65adc3214cb089e2";
export const url=new URL("../icons/V/videocam-fill.svg?v=2161227d9afeb058aee7fe65bcf0ab302bb6c6f13e11ada7155a2db2f71c5513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
