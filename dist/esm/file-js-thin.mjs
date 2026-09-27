export const name="file-js-thin";
export const id="dl_74dd3a4880104f1b9a0a";
export const url=new URL("../icons/file-js-thin.svg?v=336a8bdfc64554fdc5c2808ea557694766e1c5c243a9946fcee1577d5948a39e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
