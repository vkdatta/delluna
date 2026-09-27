export const name="sigma";
export const id="dl_9d7c59380a794d368a39";
export const url=new URL("../icons/sigma.svg?v=e7fbd9e0e7c2d142b27bb19fb66ff573bc79554557c2e0f5500f228416b58f25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
