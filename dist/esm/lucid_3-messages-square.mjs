export const name="lucid_3-messages-square";
export const id="dl_8927e2ff46ca41dd925d";
export const url=new URL("../icons/lucid_3-messages-square.svg?v=63db554a6fe77b3be996208a5af636d7efc8a1654f8171029654bc696c2a0124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
