export const name="shield-plus-thin";
export const id="dl_f2ebd68f9c21fd9cf7b2";
export const url=new URL("../icons/shield-plus-thin.svg?v=2bca3a06d89959392e9f7092520f6dab83fea9999d1bc5dda7cad59237b60928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
