export const name="keyboard_external_input-fill";
export const id="dl_42958488c84e4f91afac";
export const url=new URL("../icons/keyboard_external_input-fill.svg?v=235e4e31193cc0a42e6510f3f1518ab3540e2a160a3f16ca59a9bf6385761668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
