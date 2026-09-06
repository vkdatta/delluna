export const name="medium-logo";
export const id="dl_158e8527811a4cdc8b64";
export const url=new URL("../icons/medium-logo.svg?v=da5926b5d8677f846fd2c2c588a91d60cc7fc6a867f0abe0c9ff9663df30a1c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
