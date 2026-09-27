export const name="file-jsx-duotone";
export const id="dl_d47d75e32b244ea99bb4";
export const url=new URL("../icons/file-jsx-duotone.svg?v=b827a0fe50710f42a811f6278a21257cc2f8c05f229f24882f76a8bd4edf8a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
