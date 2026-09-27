export const name="text-indent-thin";
export const id="dl_8ec20c64e89ea39203d0";
export const url=new URL("../icons/text-indent-thin.svg?v=7bff6e33ffb5cce0ff0bd9a7e846f1d1cc60faa00af3d8ea5e22c694633adf01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
