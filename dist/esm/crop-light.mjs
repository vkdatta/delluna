export const name="crop-light";
export const id="dl_e7fcf729f94243f18485";
export const url=new URL("../icons/crop-light.svg?v=75bde801d6ddb5cd969302a4af892188360ee5933ad81a0ea61295b4baeaf2f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
