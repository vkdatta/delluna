export const name="checks";
export const id="dl_4e54a25ed3534ad79161";
export const url=new URL("../icons/checks.svg?v=363e96ad74949b3240c42edcac7e63dc889c5ca6387f306aca5511faed537d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
