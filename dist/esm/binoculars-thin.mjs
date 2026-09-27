export const name="binoculars-thin";
export const id="dl_8cd5e769ac1f4fd68576";
export const url=new URL("../icons/binoculars-thin.svg?v=83f779fe8812a1bce4abdae8e2b1b72c455064648e0d37c9ab520e7f66ca93ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
