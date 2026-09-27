export const name="offline_pin-fill";
export const id="dl_263fd1f594ffe63482d0";
export const url=new URL("../icons/offline_pin-fill.svg?v=cb4372fddd764fcecb2bbf70c50820d1d63f38cde947f6e3d8a6cdcc1d9bdae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
