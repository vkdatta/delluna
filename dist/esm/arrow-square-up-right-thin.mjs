export const name="arrow-square-up-right-thin";
export const id="dl_bab11487e5134c3d933c";
export const url=new URL("../icons/arrow-square-up-right-thin.svg?v=8ecac39fd8a59cd9ce678fb26212e98eba8c135307aab227278e20225e3ef73a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
