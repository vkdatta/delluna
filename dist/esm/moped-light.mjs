export const name="moped-light";
export const id="dl_0010b0bb960d42f3b012";
export const url=new URL("../icons/moped-light.svg?v=9aff8f7161f84df48bb746946362e3ad5942e881b0030db2e1c57c0e09ad6da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
