export const name="person_celebrate";
export const id="dl_78ffd71f6ad697ac90f5";
export const url=new URL("../icons/person_celebrate.svg?v=e252906386443021ab94fcbcb06b928c9baad3ac1fd735bb85ca9b6e996752b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
