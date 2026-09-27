export const name="arrow-square-left-thin";
export const id="dl_b189c134755c4d16aece";
export const url=new URL("../icons/arrow-square-left-thin.svg?v=9d036a6b7c0f68fbcaeeb837c34ca41a2b384b9e97d93bd86af37b1806dc1a10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
