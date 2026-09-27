export const name="paint-brush-broad-light";
export const id="dl_454b50fe74694e4c8d0e";
export const url=new URL("../icons/paint-brush-broad-light.svg?v=97f1833447d22fd9e7104eb02846ecefa46713206084f20351a57a96a769ee23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
