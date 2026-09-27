export const name="guitar-thin";
export const id="dl_cb9c76ad17614b639d7b";
export const url=new URL("../icons/guitar-thin.svg?v=a4af7d1bf405f06496349c42643f7b405c4582556cc72adbca19a1f17112fd38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
