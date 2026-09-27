export const name="push-pin-slash-duotone";
export const id="dl_2da468ace68d4f1f92d4";
export const url=new URL("../icons/push-pin-slash-duotone.svg?v=310e4c7def5ca82034ef46a21bbc0a509d0e527d528fa4c4becd005b5f5c1733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
