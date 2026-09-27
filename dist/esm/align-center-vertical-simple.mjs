export const name="align-center-vertical-simple";
export const id="dl_687173a409d4431393a6";
export const url=new URL("../icons/align-center-vertical-simple.svg?v=8ee68ee7c5d24bd4ea8221a1dca7eec2738da9d41870c4b64b9e9f92204d345b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
