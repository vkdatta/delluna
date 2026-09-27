export const name="medium-logo";
export const id="dl_158e8527811a4cdc8b64";
export const url=new URL("../icons/medium-logo.svg?v=a1e83c0210640d6bb7d0c78be8c82b64a2a1f3c57d9641f3807ecfaa2b808c61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
