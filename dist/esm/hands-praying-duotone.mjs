export const name="hands-praying-duotone";
export const id="dl_3bda0eb30baa4e49a4d8";
export const url=new URL("../icons/hands-praying-duotone.svg?v=fa407ede4ef5e070c2ec8f2555567fe3270816d60c6cc9071f930e5072755605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
