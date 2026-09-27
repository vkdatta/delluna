export const name="spinner-ball-bold";
export const id="dl_e68c42df57fc2603c9b4";
export const url=new URL("../icons/spinner-ball-bold.svg?v=3e1f52feaeebe606442b8fceb892f46ab11c53c25229b6616eae1a52a683abc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
