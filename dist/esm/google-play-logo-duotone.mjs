export const name="google-play-logo-duotone";
export const id="dl_cad95887b0a5431f838d";
export const url=new URL("../icons/google-play-logo-duotone.svg?v=56b79837103c176c6da5e20761ca21a7b3182596207ab62224779650019d1ef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
