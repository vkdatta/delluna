export const name="stroke_full";
export const id="dl_4b331c378c321b25b2cc";
export const url=new URL("../icons/stroke_full.svg?v=85ca3b66742e67c6c34c320a2fa70b1a544bbed0563822627983b0b75ab9b76c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
