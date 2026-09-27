export const name="translate-thin";
export const id="dl_c256166a1f8247db4b59";
export const url=new URL("../icons/translate-thin.svg?v=3b1cb0f653589b884d150c4239b370eebd0c9773017cb0ada2acb56e44ff0555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
