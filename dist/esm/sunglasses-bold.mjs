export const name="sunglasses-bold";
export const id="dl_ce2a5fe28e1f4ee7dac3";
export const url=new URL("../icons/sunglasses-bold.svg?v=acab85ec7da257669476334af6b45111e378dd3890e7c80564c4d74824a416c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
