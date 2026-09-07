export const name="warning";
export const id="dl_5e3872ec265e406a89fa";
export const url=new URL("../icons/W/warning.svg?v=047c8edbdfddb9f1692bbf56acc85b7e4649b567c60eb39470e98e4f9ddc6a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
