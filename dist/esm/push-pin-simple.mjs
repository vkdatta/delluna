export const name="push-pin-simple";
export const id="dl_bf62e3feb1bf4bfc875e";
export const url=new URL("../icons/push-pin-simple.svg?v=37120fbc57ccc08c1b47949af2b1e1cc0a118d889e5dc51687f5e0bf59671968",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
