export const name="dry_cleaning";
export const id="dl_34e56356ed004d3580dc";
export const url=new URL("../icons/D/dry_cleaning.svg?v=e4d8167757325ae3448047972b97bf7165d80552f5b60f092c078d96055a48e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
