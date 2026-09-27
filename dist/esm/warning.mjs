export const name="warning";
export const id="dl_98dc81a1f960a504151b";
export const url=new URL("../icons/warning.svg?v=047c8edbdfddb9f1692bbf56acc85b7e4649b567c60eb39470e98e4f9ddc6a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
