export const name="paint-brush-duotone";
export const id="dl_dc6d9cc63c31441ca5e1";
export const url=new URL("../icons/paint-brush-duotone.svg?v=0b51caafe4ae1a139e7da7bd4051f199fdf466ef9cc2ba6b1a30058eaf93285a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
