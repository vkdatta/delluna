export const name="fit_screen";
export const id="dl_5757ec1d1c82aa230c4d";
export const url=new URL("../icons/fit_screen.svg?v=2b848a4c4b02912bb812669b6e8e092d498dfc050ae69ced9d1de95fd877f65c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
