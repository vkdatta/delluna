export const name="lucid_3-milestone";
export const id="dl_dc86ff532e934b62a9b1";
export const url=new URL("../icons/lucid_3-milestone.svg?v=48df5a749a8697b380db9df4138030916a902e08af72c5bf42c4af0a560f4bf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
