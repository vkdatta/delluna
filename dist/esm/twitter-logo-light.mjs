export const name="twitter-logo-light";
export const id="dl_456d4659b8f38a5c5173";
export const url=new URL("../icons/twitter-logo-light.svg?v=589e382952a58580806f7d36d83e2ee4af4c5bcdf19dd5bd08d7ea10bb4af2df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
