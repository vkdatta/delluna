export const name="footprints";
export const id="dl_b9918a78faaf483382ab";
export const url=new URL("../icons/footprints.svg?v=7a79cf63ac239e9f27e1f6b9b62019c09fcbfbb3db8b51b7dd8d0c5c4393de12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
