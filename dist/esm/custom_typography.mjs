export const name="custom_typography";
export const id="dl_46d3dc148b7945cebe14";
export const url=new URL("../icons/custom_typography.svg?v=e6ebef344e23859fc0cefebf7d3dd3c321474420a775585f71f21ed71e81bea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
