export const name="pepper-bold";
export const id="dl_63223b5ab35a40178f24";
export const url=new URL("../icons/pepper-bold.svg?v=4933ddb200c9bfbcf88543adbd6cd236b32b34f2d3424bec12d5ac8c623b9cb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
