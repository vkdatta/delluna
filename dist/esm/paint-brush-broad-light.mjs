export const name="paint-brush-broad-light";
export const id="dl_454b50fe74694e4c8d0e";
export const url=new URL("../icons/paint-brush-broad-light.svg?v=937116c424714fd8610ca0c62dbdacec370d784c5a8c2476f2eb7389bf042930",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
