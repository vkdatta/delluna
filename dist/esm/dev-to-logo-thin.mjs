export const name="dev-to-logo-thin";
export const id="dl_54fddc72b4df4b678fe4";
export const url=new URL("../icons/dev-to-logo-thin.svg?v=d07a3f9f80c788b79b3bb13b324e0858d332d4ec44975826aa85e1869efec34d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
