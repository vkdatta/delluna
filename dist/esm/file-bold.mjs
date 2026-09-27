export const name="file-bold";
export const id="dl_34a477f0ec024220b171";
export const url=new URL("../icons/file-bold.svg?v=f97584536701b7c2f682ab6918cd77c180d278e0b6c45497619fcd62ce9fef16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
