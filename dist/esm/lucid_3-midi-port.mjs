export const name="lucid_3-midi-port";
export const id="dl_8f40e32aa2b9418e8717";
export const url=new URL("../icons/lucid_3-midi-port.svg?v=fc41145fad9c6f8201597db77dc1cc6ff014a8976fea6a282425ef7020aea8d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
