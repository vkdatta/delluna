export const name="cinematic_blur";
export const id="dl_5763aa133bb75ca4e4a9";
export const url=new URL("../icons/cinematic_blur.svg?v=e88fd88a0f8b016c589bfa85e12c971d504958997c68b55eccfb4ad2c0563184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
