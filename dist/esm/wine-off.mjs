export const name="wine-off";
export const id="dl_b9195bad052b40d081c6";
export const url=new URL("../icons/wine-off.svg?v=3e01ac75122a8741620d126521449c68e893289a60c8dafee6a9c3dffb8ffbf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
