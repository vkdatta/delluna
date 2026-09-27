export const name="camping";
export const id="dl_cce376072acf53d1b498";
export const url=new URL("../icons/camping.svg?v=86254ede125bb46f055471cf8038728bf4d71c864f6dfec01e249c920c6aaf67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
