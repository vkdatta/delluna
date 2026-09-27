export const name="translate";
export const id="dl_526e86d1de5bb0cab4b6";
export const url=new URL("../icons/translate.svg?v=0bacde8e65e4f4c4450f4fdb11a9d1148801848122c8ba26dc6f2b0f4fd2ca63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
