export const name="dots-six-bold";
export const id="dl_fa2a9cd5220e4772ba07";
export const url=new URL("../icons/dots-six-bold.svg?v=c23b1da6318318b15581ce383b190d135508f3e3e0e4d2afcd1375a6f8843b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
