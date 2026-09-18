export const name="roller_shades-fill";
export const id="dl_999dd09a13924ee79951";
export const url=new URL("../icons/roller_shades-fill.svg?v=c59a0db1aa1c26603de8cedf26c5197537e80b39ee66f8279426d049b02e64b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
