export const name="unpublished";
export const id="dl_861c2b4c0f5c495b861d";
export const url=new URL("../icons/U/unpublished.svg?v=43c4bb50becfb6232ef83420dad63f362d6c2fa5336ca58be421cdec7623fe7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
