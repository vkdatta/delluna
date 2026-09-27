export const name="search_hands_free-fill";
export const id="dl_020aedd6ee772ea617e0";
export const url=new URL("../icons/search_hands_free-fill.svg?v=0f6dbae1a174cbba550d64224dcfb2ba2d1ff912f027961409e7e1b21c16359e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
