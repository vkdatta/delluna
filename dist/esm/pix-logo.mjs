export const name="pix-logo";
export const id="dl_67ee8d6e187a4e928d9d";
export const url=new URL("../icons/pix-logo.svg?v=c0d74009065389b2efb8d9de37ff5fadb924991431f8bc96ea1d6115342e2ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
