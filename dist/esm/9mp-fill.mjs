export const name="9mp-fill";
export const id="dl_a55b6f2db20dcb4c175d";
export const url=new URL("../icons/9mp-fill.svg?v=96fc5028109014f2810bba047358e81f21568b26e268ce62eb3bdb25aba0de3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
