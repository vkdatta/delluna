export const name="circle-notch-thin";
export const id="dl_585b1a72b4414f9083a8";
export const url=new URL("../icons/circle-notch-thin.svg?v=273d0baf48b3e3451bbb3a326ee70d2efe5603d0832f6f83f1a8bc33c6f10f65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
