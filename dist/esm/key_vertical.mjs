export const name="key_vertical";
export const id="dl_5d36799e86b445debc08";
export const url=new URL("../icons/K/key_vertical.svg?v=567b1fbe1286f5c978b28641f3f285fe342a78a4345b3751696c5180cffb110a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
