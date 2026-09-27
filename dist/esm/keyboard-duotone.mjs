export const name="keyboard-duotone";
export const id="dl_00b8772d08424df9909d";
export const url=new URL("../icons/keyboard-duotone.svg?v=0145d2c3caf931916af9911c81fbb2573ed8ae83682e95aa368bef732850bb0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
