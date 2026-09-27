export const name="camera-rotate-thin";
export const id="dl_3df0ad6bf0284891af0e";
export const url=new URL("../icons/camera-rotate-thin.svg?v=cc8d4d8e80c0ec7540619b731f2b11c7114569ce8768f8b7df7d4a96d13840ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
