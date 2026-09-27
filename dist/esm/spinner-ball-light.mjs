export const name="spinner-ball-light";
export const id="dl_1aab01e100d528431b48";
export const url=new URL("../icons/spinner-ball-light.svg?v=4012a9c29344a01a2f7387f9298a194db8af6c980a4f90a0a97e5ccbbe67f0b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
