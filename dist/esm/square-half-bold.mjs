export const name="square-half-bold";
export const id="dl_88e7760f072b857be670";
export const url=new URL("../icons/square-half-bold.svg?v=1303681ce8547ee3daaeb90223a6c4a7d08f2ef933273234fdbd6a4947247851",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
