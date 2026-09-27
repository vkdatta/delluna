export const name="device-mobile-thin";
export const id="dl_111f1ca75e1343e1a40d";
export const url=new URL("../icons/device-mobile-thin.svg?v=7eed285caa9d25ce025d075582b2b92572652ecfee4df5a5edb0bd7ce57b4b31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
