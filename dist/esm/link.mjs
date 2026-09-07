export const name="link";
export const id="dl_2e34914f4c1a9cf9c705";
export const url=new URL("../icons/link.svg?v=526d89480e3064c614b7d46a93888c187696d7776f684527d48eb94e2d7cd5d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
