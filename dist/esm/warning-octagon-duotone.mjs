export const name="warning-octagon-duotone";
export const id="dl_45e44d7c3dbb87d269e4";
export const url=new URL("../icons/warning-octagon-duotone.svg?v=fcfeeb9f2523767d046d52f59ed6a47e14c617d123971b00d523e1b0fdbd8102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
