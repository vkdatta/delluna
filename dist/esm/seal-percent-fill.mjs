export const name="seal-percent-fill";
export const id="dl_dcb9b3543dfc437bbe07";
export const url=new URL("../icons/S/seal-percent-fill.svg?v=de05f1b00fddb128dcb844badde6b0216378c037e9c5cb18efcb604cf36092ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
