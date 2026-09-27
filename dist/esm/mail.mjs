export const name="mail";
export const id="dl_b2f6f9ce098f00721e01";
export const url=new URL("../icons/mail.svg?v=4cb2390a0506b3c601646564ff3ddd40ed8fbab60159c685bf1b9746ec44abb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
