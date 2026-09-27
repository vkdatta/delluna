export const name="lucid_3-panels-left-bottom";
export const id="dl_3f95510e33724d44a1c9";
export const url=new URL("../icons/lucid_3-panels-left-bottom.svg?v=e01abd19ff179675546c805f9c820710bfcc0ca9a0c339cc1ab7231861e5c48d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
