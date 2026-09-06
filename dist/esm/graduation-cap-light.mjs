export const name="graduation-cap-light";
export const id="dl_7a15842a54f54992a876";
export const url=new URL("../icons/graduation-cap-light.svg?v=f167a0e0800e69408b37a768c8d677b1c64f9dc3365f97528d4517425f257ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
