export const name="beach-ball";
export const id="dl_e871b048b3564e31b07d";
export const url=new URL("../icons/beach-ball.svg?v=fdc16c7e30d26c7f6787debdfb7067d68abd5f76a9dba0c013dd36983df4d2a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
