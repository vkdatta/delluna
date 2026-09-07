export const name="upload-simple-bold";
export const id="dl_c9b29de652fb426c94dd";
export const url=new URL("../icons/U/upload-simple-bold.svg?v=777d53f2af2560c2284d6bd3767a4c8ff1ab83a1209bd78c2873cd250b57653e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
