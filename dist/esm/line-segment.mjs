export const name="line-segment";
export const id="dl_ed08c186411242da9302";
export const url=new URL("../icons/line-segment.svg?v=b3cafb6678b8f3f4ca6fb13de5a5cb957d046659d796b1df64b223024e4c450b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
