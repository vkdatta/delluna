export const name="picture_as_pdf";
export const id="dl_0510b160b6b3403e9e65";
export const url=new URL("../icons/picture_as_pdf.svg?v=8591b91257e49bff1f376b08b2278e37ca7b12f9b486ec441fa854ae10982528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
