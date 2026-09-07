export const name="twitch-logo-fill";
export const id="dl_875387d096e544aaa0cf";
export const url=new URL("../icons/T/twitch-logo-fill.svg?v=df5adaa427994af42c961715d6e75f496b1832606a68cbd8090d09c25a4e8361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
