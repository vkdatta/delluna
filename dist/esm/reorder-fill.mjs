export const name="reorder-fill";
export const id="dl_2106939170b94122d921";
export const url=new URL("../icons/reorder-fill.svg?v=041852cf02e58466bc1bfefe7e550d1786733864217d0f846bc7aa4de056bdf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
