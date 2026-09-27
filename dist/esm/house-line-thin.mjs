export const name="house-line-thin";
export const id="dl_3d024e5e9f234354a3c8";
export const url=new URL("../icons/house-line-thin.svg?v=a9789ebbd76570e9027409f8faf91a02bf20f6123e8029f74a3903b07e8aa9d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
