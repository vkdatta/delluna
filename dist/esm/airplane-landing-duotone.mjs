export const name="airplane-landing-duotone";
export const id="dl_832a965a5e32425d9315";
export const url=new URL("../icons/airplane-landing-duotone.svg?v=4a1070c4b76bb95a516c8014a8b49f6ab100570d20f97b809ea3d38efd5dc028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
