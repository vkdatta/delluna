export const name="member-of-fill";
export const id="dl_045b179d8c5247a1b041";
export const url=new URL("../icons/member-of-fill.svg?v=723b323b54bf7eefd15adc21f6639bab1411c6b79acc666d644e4fd0f8f632ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
