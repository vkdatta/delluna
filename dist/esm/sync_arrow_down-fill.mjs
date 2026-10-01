export const name="sync_arrow_down-fill";
export const id="dl_c899d68ab2c0f1c32bf2";
export const url=new URL("../icons/sync_arrow_down-fill.svg?v=5b53cc46a616c66ae5f6b0f4b76342c2af3777e5d4b75991cdd92158ea6749b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
