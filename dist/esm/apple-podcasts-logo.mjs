export const name="apple-podcasts-logo";
export const id="dl_7433d34b97f241ac84b4";
export const url=new URL("../icons/apple-podcasts-logo.svg?v=e15ff5bcaa4562ef375a6590108410f5f9a84a7a6c0ffe55d34677d4357ad274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
