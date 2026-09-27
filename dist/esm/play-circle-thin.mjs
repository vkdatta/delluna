export const name="play-circle-thin";
export const id="dl_597cb935d880479d9ca1";
export const url=new URL("../icons/play-circle-thin.svg?v=35bd3c174072a5863c99da7b69e4341dba40494f70e8296eda531e3728643f4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
