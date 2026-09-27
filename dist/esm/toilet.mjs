export const name="toilet";
export const id="dl_1d6562ec993342d8b5fe";
export const url=new URL("../icons/toilet.svg?v=7ef16b75b06516e419b12ccc180f7e5603c5a1a71f6110b2a98004d93246aa6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
