export const name="volume-x";
export const id="dl_c19485dd5d204779a8d1";
export const url=new URL("../icons/volume-x.svg?v=d15019c5d14bcf9b3192175d21e829c7fc935a6a1a13dcb57d935e5b7868e09c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
