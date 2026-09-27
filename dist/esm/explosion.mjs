export const name="explosion";
export const id="dl_13abb7ba7a28055c35fd";
export const url=new URL("../icons/explosion.svg?v=f33000ed78ab956fccd787c609e81fba8b70d8f46f781f47680186831d707540",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
