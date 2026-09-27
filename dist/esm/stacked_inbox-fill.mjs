export const name="stacked_inbox-fill";
export const id="dl_c76b1568dcd572934cb6";
export const url=new URL("../icons/stacked_inbox-fill.svg?v=3c353a52176d1e66c8a8a85d76638b10b8ee851751df54a8bafd4b76b27372c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
