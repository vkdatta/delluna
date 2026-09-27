export const name="keep_public";
export const id="dl_3d0283105b7766f95923";
export const url=new URL("../icons/keep_public.svg?v=15f924707c68df769e8828600ad2f3b1e362b2c6a1a126080412ef16cd4ddd0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
