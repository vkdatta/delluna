export const name="toggle-left-bold";
export const id="dl_7882790afb79d3f8864a";
export const url=new URL("../icons/toggle-left-bold.svg?v=f3c10c0979ef4e683ee1e5e5cb1b2577308d602c0871ae97b5a2032d7857860e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
