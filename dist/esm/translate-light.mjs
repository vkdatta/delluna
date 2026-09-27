export const name="translate-light";
export const id="dl_d78e2e6e092a92d57dee";
export const url=new URL("../icons/translate-light.svg?v=3fe59c87b385455874d1a38ca2a05ab1ba2905789fa5f16d77eb940e916a83ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
