export const name="telegram-logo-light";
export const id="dl_729a78b487d7eb71d80a";
export const url=new URL("../icons/telegram-logo-light.svg?v=a480aa9325e683f4be7d7b934301c5ddd6004af748b4cc84ca2df53c9b672cb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
