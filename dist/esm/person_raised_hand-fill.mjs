export const name="person_raised_hand-fill";
export const id="dl_a54973d592413a7b7b1e";
export const url=new URL("../icons/person_raised_hand-fill.svg?v=4a573ec41d121af8c95e2b0166d641413be21d63e058beadb6c2eb985c0ef94a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
