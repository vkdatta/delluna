export const name="at-bold";
export const id="dl_47ce5372452f4742a5e9";
export const url=new URL("../icons/at-bold.svg?v=1c1ede3364fe072f606d30f3ffd098b6e40c56e36ac4161961d283b68eb1c8c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
