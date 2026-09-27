export const name="lucid_1-circle-pause";
export const id="dl_af6e347f7feb465e8ad8";
export const url=new URL("../icons/lucid_1-circle-pause.svg?v=160d734dd25b0fe9c25f5a1a199b6cee0f1a5d95dff658bc5a5e8e956f55c64b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
