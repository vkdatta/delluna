export const name="format_clear";
export const id="dl_f4768066996e7ae25884";
export const url=new URL("../icons/format_clear.svg?v=a809b16404b40cb6c137137ae8597ed25ad56b13740153b65cd5c0d734c3b1dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
