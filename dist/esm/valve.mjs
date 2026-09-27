export const name="valve";
export const id="dl_7b0003998a281e53c074";
export const url=new URL("../icons/valve.svg?v=cf1c39d477c8e0e56cb9a02198c9b3fc5b6cc73a94c6ea2ce43162238f1b3573",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
