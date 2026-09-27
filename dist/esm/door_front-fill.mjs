export const name="door_front-fill";
export const id="dl_131d1b411923e3e0f04f";
export const url=new URL("../icons/door_front-fill.svg?v=3f16a89cba8318b0da8f9750c7d0edd7edd10812de05c6846b0172e889a7c994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
