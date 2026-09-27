export const name="delta";
export const id="dl_0ebf73629b3043d58041";
export const url=new URL("../icons/delta.svg?v=fefd676a9711e08107362361c2ecc441a1e475d98b1fdfef456450582ea6f57e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
