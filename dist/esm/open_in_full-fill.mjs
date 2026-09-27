export const name="open_in_full-fill";
export const id="dl_98db340f9d709227c825";
export const url=new URL("../icons/open_in_full-fill.svg?v=eab84c65678eaff94e2957f6afff3267d1906e11c24878d0b4438269fc77783c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
