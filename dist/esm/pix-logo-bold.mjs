export const name="pix-logo-bold";
export const id="dl_83d39b4343c044089206";
export const url=new URL("../icons/pix-logo-bold.svg?v=d73e14e0d948531575936de9ec62f01545cc46f5029df1ed65d113fc52a89391",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
