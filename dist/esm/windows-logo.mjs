export const name="windows-logo";
export const id="dl_d7466d601323c1126f74";
export const url=new URL("../icons/windows-logo.svg?v=6b42b6c3411472708edd4d7fefc06586762a38ed674f12aa06da219c746a113a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
