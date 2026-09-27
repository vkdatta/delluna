export const name="facebook-logo";
export const id="dl_94a4a3ca5cad4cc1a5c1";
export const url=new URL("../icons/facebook-logo.svg?v=055d9c9fa5a828ebd4ee4b59968e906ca6fa330af037f5965e55d5351d4880cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
