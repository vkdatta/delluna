export const name="flip-vertical-fill";
export const id="dl_c406a92f23ff457e998a";
export const url=new URL("../icons/flip-vertical-fill.svg?v=07d94f57b7d51608c05f9de2e59bc14a52178b2072b659ddbfc4c442a835c2c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
