export const name="highlighter";
export const id="dl_291f1d30164541df9c95";
export const url=new URL("../icons/highlighter.svg?v=488727af950237b45b6024e5a587f8d08e29841cccee931592f54e3d40ddd8fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
