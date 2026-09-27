export const name="paint-brush-duotone";
export const id="dl_dc6d9cc63c31441ca5e1";
export const url=new URL("../icons/paint-brush-duotone.svg?v=34885d27d53149687f3ac36eec3e07d189bd0425a52a64e4c79ce9e177e00fa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
