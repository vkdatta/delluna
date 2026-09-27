export const name="sun-medium";
export const id="dl_bf68266431584d4e88b2";
export const url=new URL("../icons/sun-medium.svg?v=2fb750c3dfccf4bec86b596fa2a808717a902a7e5840df5345c4bb1248ed0d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
