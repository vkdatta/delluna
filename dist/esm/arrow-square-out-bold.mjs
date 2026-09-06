export const name="arrow-square-out-bold";
export const id="dl_f34dd41e31564e75a932";
export const url=new URL("../icons/arrow-square-out-bold.svg?v=68348bacc7f539b8d73de92d7c120f22e424b4364374ccab01719ada8c8a12aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
