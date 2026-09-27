export const name="folder-thin";
export const id="dl_b588840c96914f31abab";
export const url=new URL("../icons/folder-thin.svg?v=f4776ffe8ecc6b8f34913fbc1296d0b1e0cdb8a14f5b566bc3dd03d241434d8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
