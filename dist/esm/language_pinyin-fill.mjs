export const name="language_pinyin-fill";
export const id="dl_ec57ccd52e29b77576ff";
export const url=new URL("../icons/language_pinyin-fill.svg?v=6cd9591f4180ee66b6b3f611a2a82a69bfb93ed8443ef54c76030d6f2e6b5aed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
