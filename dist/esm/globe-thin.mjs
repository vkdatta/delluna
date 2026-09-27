export const name="globe-thin";
export const id="dl_92fb137f893f41369dd2";
export const url=new URL("../icons/globe-thin.svg?v=e810eecfd829d286e9bbfa35a519968acc0888f861d8c98d469798f495f3c0db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
