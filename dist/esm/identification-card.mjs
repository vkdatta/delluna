export const name="identification-card";
export const id="dl_71670481f0ab414090e4";
export const url=new URL("../icons/identification-card.svg?v=dfc4f8ce8b43ff3ed1053499da1ab3b875522f480c47963ea48d52be96c54c8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
