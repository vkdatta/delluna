export const name="lastfm-logo-thin";
export const id="dl_9173c3eccf7f4d96b55e";
export const url=new URL("../icons/lastfm-logo-thin.svg?v=b719cd0e0af173da38be1c27dff32d0ba7597d08597ded5c3535b2c0b40a1e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
