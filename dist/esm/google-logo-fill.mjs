export const name="google-logo-fill";
export const id="dl_26275e1c501e4a21994a";
export const url=new URL("../icons/google-logo-fill.svg?v=e56d1ca222aee0a112ebacf7eb3b870302bc8f89ace0504942770b40ab6df2ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
