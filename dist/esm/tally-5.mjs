export const name="tally-5";
export const id="dl_8d99c949c39e4af6b4b6";
export const url=new URL("../icons/tally-5.svg?v=2b376bb94b2852e54791580a33417072d5e4837874ecd87dcfd33328cddedc57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
