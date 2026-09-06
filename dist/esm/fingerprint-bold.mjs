export const name="fingerprint-bold";
export const id="dl_30edb70b8b944e209f61";
export const url=new URL("../icons/fingerprint-bold.svg?v=0820e29620de75c6a9741de9924570ccd9d4db8603f5b372a72e72f3a77fe0e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
