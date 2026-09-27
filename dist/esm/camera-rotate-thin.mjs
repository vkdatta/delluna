export const name="camera-rotate-thin";
export const id="dl_3df0ad6bf0284891af0e";
export const url=new URL("../icons/camera-rotate-thin.svg?v=609e1da7c20358f01ceae4bbaf56218f10a7f1a465396a0c42cecacae75fea3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
