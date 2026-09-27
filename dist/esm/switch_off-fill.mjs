export const name="switch_off-fill";
export const id="dl_9292861c51db3a573999";
export const url=new URL("../icons/switch_off-fill.svg?v=ba2db8ce9f3c551840d11eb9f954590c09df844d099bea24ef3652abe688730a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
