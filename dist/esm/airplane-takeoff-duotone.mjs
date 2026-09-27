export const name="airplane-takeoff-duotone";
export const id="dl_a8134cbdbd2948498f8e";
export const url=new URL("../icons/airplane-takeoff-duotone.svg?v=e0eb5bb08e38a399740ed435e58b1446a36a46e105a83c6fd9f6fa76bebef012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
