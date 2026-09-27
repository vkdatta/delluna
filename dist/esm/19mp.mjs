export const name="19mp";
export const id="dl_812dd9591c21b085365a";
export const url=new URL("../icons/19mp.svg?v=6e759460e9bd2666750316408156a4ef207c8fbc1a1cd4dea4979e4b37b00ddb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
