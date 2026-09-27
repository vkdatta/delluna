export const name="bicycle-thin";
export const id="dl_3ac5be9d004b4a9ca10a";
export const url=new URL("../icons/bicycle-thin.svg?v=413b206ee10a3fac1ba931c6cd74313885830cd896b2630961914360e544e492",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
