export const name="palette-light";
export const id="dl_9213e1905d0642818328";
export const url=new URL("../icons/palette-light.svg?v=6f4a7e1e8dbb120dc2bb69e2a23925cf0120277171e9ce26a1738a0c90ab7efb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
