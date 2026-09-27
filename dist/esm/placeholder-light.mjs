export const name="placeholder-light";
export const id="dl_dce60049ae874a5693cf";
export const url=new URL("../icons/placeholder-light.svg?v=41848dab73373c320c852b06234662ea8000b49d4634948405081da10379d024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
