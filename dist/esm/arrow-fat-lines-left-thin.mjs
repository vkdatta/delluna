export const name="arrow-fat-lines-left-thin";
export const id="dl_1bdf3b5e79bf40449499";
export const url=new URL("../icons/arrow-fat-lines-left-thin.svg?v=f85244ff6bee67aa60782488b2d11a5429511d59f8b9b5d1f78f3bccf454529f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
