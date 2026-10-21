export const name="test1";
export const id="dl_b335fccc58f044fe8a9b";
export const url=new URL("../icons/tcases/test1.svg?v=455555c84dffa1f6e8bb046b4ed3321a66336fdade99b693198df3b6beda24d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
