export const name="tatami_seat-fill";
export const id="dl_512a5c5bb78fade76a7f";
export const url=new URL("../icons/tatami_seat-fill.svg?v=42dee5f8014df80ab7e7d7a77a8903f05c4633543ab07a596120c2e1f3b817d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
