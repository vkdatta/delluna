export const name="smiley-sticker-duotone";
export const id="dl_0c14481dabd9ee4991b9";
export const url=new URL("../icons/smiley-sticker-duotone.svg?v=5a3b08a1a5e34e991629a878bc5ebc85c280fd29844c7be1490bf1dd0f73c3a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
