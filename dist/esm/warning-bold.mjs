export const name="warning-bold";
export const id="dl_8a51a659c5214628a9a5";
export const url=new URL("../icons/W/warning-bold.svg?v=c473db9807bb726638eefcdc70554078cd2a195313d87e28a70498531ec106c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
