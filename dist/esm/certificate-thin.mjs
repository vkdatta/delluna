export const name="certificate-thin";
export const id="dl_55e6e9b365ba4f6ca326";
export const url=new URL("../icons/certificate-thin.svg?v=50abaf363898d1a89bfe190928930417be8480ad476d4d856826a6cc79164c6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
