export const name="hourglass-high";
export const id="dl_3b548ce8e1924beda6fa";
export const url=new URL("../icons/hourglass-high.svg?v=a68977abed0e68a7c09288d4c489c05ebda6fd03cc7f298cad7d29097ff36dc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
