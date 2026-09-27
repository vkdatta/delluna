export const name="shower-light";
export const id="dl_644f5a735eb7bbaa36d5";
export const url=new URL("../icons/shower-light.svg?v=1e08c86259c40a9d33431bde2345e66927a20486cdc5f593d63c5e89572e02c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
