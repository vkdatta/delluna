export const name="circles-three-bold";
export const id="dl_465594adb30e45a7bfec";
export const url=new URL("../icons/circles-three-bold.svg?v=4a13fc6800aa1fd464f7b276dd98caccc95f4ddae49c324782551fcd8e48f426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
