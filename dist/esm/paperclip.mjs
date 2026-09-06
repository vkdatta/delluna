export const name="paperclip";
export const id="dl_a7fe1c9acbcb4affaf36";
export const url=new URL("../icons/paperclip.svg?v=b60210f558fb4693a083ed563af191709a7cafcbc8fb0d1d083db9ef9c2412ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
