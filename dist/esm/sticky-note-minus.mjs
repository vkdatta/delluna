export const name="sticky-note-minus";
export const id="dl_67318d6f555149238915";
export const url=new URL("../icons/sticky-note-minus.svg?v=5386ccd7052d828d37f91bfe8adfbdcc58424d1c14837d64644fcdf4e9b79bb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
