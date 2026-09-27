export const name="sports_cricket";
export const id="dl_e672fb854f352d862d94";
export const url=new URL("../icons/sports_cricket.svg?v=908a3208d71216988d74d373b5042e91a46c4e8be5bbd6257a7f5e1253209e58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
