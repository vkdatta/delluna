export const name="caret-double-left-duotone";
export const id="dl_24058f0d4a5947158843";
export const url=new URL("../icons/caret-double-left-duotone.svg?v=7877d8980d46b156c54958a43d2e9fe780e79f0f5fd519bb98d840bbeabc8478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
