export const name="clover-bold";
export const id="dl_9ea01b41aa7f43d5a3e9";
export const url=new URL("../icons/clover-bold.svg?v=1a5432aaf7e56bee73effd4a10d2332fe4efb55c4b998baad5b89b9e4bc85508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
