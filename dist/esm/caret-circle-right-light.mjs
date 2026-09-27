export const name="caret-circle-right-light";
export const id="dl_43970278ef5e484f939d";
export const url=new URL("../icons/caret-circle-right-light.svg?v=e1bba0071205289fb32efc2420c23cdca1ea41466a53440ace0513f5705d2898",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
