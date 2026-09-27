export const name="flag-pennant-thin";
export const id="dl_3f5e68c7bccd4139bc8f";
export const url=new URL("../icons/flag-pennant-thin.svg?v=cf106f7e2e41a12a366bbd6fa52e0f6d470eb0cc5f938c6fdde29a2c8fe79980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
