export const name="format_align_left";
export const id="dl_5bb5102c37736044a634";
export const url=new URL("../icons/format_align_left.svg?v=53b56e65513a1e2546c52ba3e00a4156bab88dad511355bfda6e64bf49da047f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
