export const name="toggle-right-light";
export const id="dl_618e0021e75cac7a7973";
export const url=new URL("../icons/toggle-right-light.svg?v=c620e83ce285b8b08ca86bdb2cd53bbc384d0225dd126853d7fa557c256e3f74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
