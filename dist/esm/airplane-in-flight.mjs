export const name="airplane-in-flight";
export const id="dl_779ea1c2efd246919ae7";
export const url=new URL("../icons/airplane-in-flight.svg?v=8d1ab49f39fe0c8c46e2644da5270b0322885132840a0271578ec3905d99f1a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
