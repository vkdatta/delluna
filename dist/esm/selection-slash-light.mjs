export const name="selection-slash-light";
export const id="dl_8f6f1b0ab423ff305275";
export const url=new URL("../icons/selection-slash-light.svg?v=6b8e50578ba6a342396f8e71608280c9b11eb7682f6f104ae8674b95c7465936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
