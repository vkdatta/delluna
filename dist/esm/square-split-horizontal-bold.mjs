export const name="square-split-horizontal-bold";
export const id="dl_2e502d18fcb813210363";
export const url=new URL("../icons/square-split-horizontal-bold.svg?v=3a74c5e45cf7d5f468942530865731c8daa3ce2ecfb77d94ecf9a5ef53682cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
