export const name="y_circle";
export const id="dl_a27eff7f1c8996a5a49d";
export const url=new URL("../icons/y_circle.svg?v=949e4183045780b60637fabb2b8b7949c3b5cb8f4ab8863f3fbf0c217d7c01bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
