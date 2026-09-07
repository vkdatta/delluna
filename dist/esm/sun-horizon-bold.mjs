export const name="sun-horizon-bold";
export const id="dl_6cb240ee9ac743b9bb16";
export const url=new URL("../icons/S/sun-horizon-bold.svg?v=fc9a976554e42b4e4d287e2919986ed980e2537253143fc8c0f15de7972ac12a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
