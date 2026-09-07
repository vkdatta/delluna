export const name="scribble-bold";
export const id="dl_d6d365e3f9be4cca95b5";
export const url=new URL("../icons/S/scribble-bold.svg?v=1c1d1809307ae731ef6177b6cfe013510173a84590966a6065ecdb6f338a895c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
