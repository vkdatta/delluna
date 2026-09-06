export const name="flashlight-bold";
export const id="dl_afaa747056af4cb897e5";
export const url=new URL("../icons/flashlight-bold.svg?v=1767b889d7942ec4579af34caa21e1567349871613ec80ccacace241fcdd7e9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
