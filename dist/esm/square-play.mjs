export const name="square-play";
export const id="dl_d2c0defc60124e2f8b35";
export const url=new URL("../icons/square-play.svg?v=23ce792778ddfd19163c2a87fce45345a382ea60cdc00a948401275ccdb61468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
