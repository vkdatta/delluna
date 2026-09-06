export const name="clock";
export const id="dl_c83561e145c7484291fc";
export const url=new URL("../icons/clock.svg?v=b8c6c2899d2b9af48a55ba02ba6d7faf89b757915772dd24f5397f7b0d02aa5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
