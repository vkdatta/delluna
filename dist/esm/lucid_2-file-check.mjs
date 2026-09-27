export const name="lucid_2-file-check";
export const id="dl_deeee4be7e9b4df698f7";
export const url=new URL("../icons/lucid_2-file-check.svg?v=0eed32912156845365464f638531b5ba9d7a8c2709f255abc57af5b88334652b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
