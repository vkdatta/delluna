export const name="temple_hindu";
export const id="dl_576419bcef02f5fdcb9e";
export const url=new URL("../icons/temple_hindu.svg?v=a1f0bb68deefec60b8746db7e770fb83b3917546dbff8b03f950844cabf7938f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
