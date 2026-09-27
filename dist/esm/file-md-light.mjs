export const name="file-md-light";
export const id="dl_d432269ed9bd4c2eafc4";
export const url=new URL("../icons/file-md-light.svg?v=406251ca6af63b6af4c3c4d1280e3ec65e092fff1f6b3041722094ac79c5ac52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
