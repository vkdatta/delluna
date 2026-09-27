export const name="eyedropper-bold";
export const id="dl_75628b9d7a4240e6b75f";
export const url=new URL("../icons/eyedropper-bold.svg?v=e96852518b03d8ac59b4627953048a992344460f09f7fd81744e7390cac30027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
