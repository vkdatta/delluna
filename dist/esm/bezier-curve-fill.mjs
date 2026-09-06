export const name="bezier-curve-fill";
export const id="dl_574f07cb47534577a2be";
export const url=new URL("../icons/bezier-curve-fill.svg?v=6eb8aecc5185c4917e784504ea12859e81d5a88a51d9c4564deacbdde5a7b86c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
