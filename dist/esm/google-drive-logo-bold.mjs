export const name="google-drive-logo-bold";
export const id="dl_e9325c72b5f044ccad71";
export const url=new URL("../icons/google-drive-logo-bold.svg?v=9b0555a2b1938dcf59626b5c528d23af807e37fc9b7534c3cd21316c2ee33248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
