export const name="stool";
export const id="dl_01430a7c0bf4b0c3e587";
export const url=new URL("../icons/stool.svg?v=536c73acbfa3d5d2d0424d6c07fd50bfc794c239b454d6317f1cf6a4a15f0cdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
