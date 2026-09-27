export const name="magnification_large";
export const id="dl_dad999ef107b22df10d8";
export const url=new URL("../icons/magnification_large.svg?v=f3ced0a3e881ae4455a358c8f9e56bf071d099a455a927665c680df697218357",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
