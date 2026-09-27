export const name="badminton";
export const id="dl_c03da5ac7e8421083048";
export const url=new URL("../icons/badminton.svg?v=053ce4ee46cc890c2e3d084d559617005408e0c12c3d830341b86d60336f39a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
