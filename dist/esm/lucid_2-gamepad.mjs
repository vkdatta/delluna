export const name="lucid_2-gamepad";
export const id="dl_e8324d7244e2415fab5a";
export const url=new URL("../icons/lucid_2-gamepad.svg?v=5cddfc31335fd5b4d2e0a61c7b1410ad4d493a8fbaa77dd7457149229a997998",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
