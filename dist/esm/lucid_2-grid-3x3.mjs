export const name="lucid_2-grid-3x3";
export const id="dl_602e1a5272a44fa4bddf";
export const url=new URL("../icons/lucid_2-grid-3x3.svg?v=09f01b5fb7f8cb59555e779285e1a2efc079ea54b6e4ff4e7b7ad8cbc4a12bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
