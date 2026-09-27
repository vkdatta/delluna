export const name="broom";
export const id="dl_647f8e11a520475baad9";
export const url=new URL("../icons/broom.svg?v=960bad3d52034bbf91f8e442a9964a321cc03bd1e79e2372271d4d8b54781f59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
