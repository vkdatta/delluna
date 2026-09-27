export const name="lock-laminated-thin";
export const id="dl_97117c5c965846549c64";
export const url=new URL("../icons/lock-laminated-thin.svg?v=4acd2f269a544eb6830c23c8d992ddf55526c061f26bdad8200591d164b6e5cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
