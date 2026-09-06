export const name="caret-line-right-fill";
export const id="dl_22694f9e41164a15b484";
export const url=new URL("../icons/caret-line-right-fill.svg?v=b212ea54908cd866a05ef88516abd1e155afe02ed5bb5b915bef1666fa71251d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
