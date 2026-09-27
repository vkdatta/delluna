export const name="virus-bold";
export const id="dl_b1c4135778b9ba7aea98";
export const url=new URL("../icons/virus-bold.svg?v=9e7e2666dd32e4727504597cf4b96c892182199daf007573a860edaf27827efc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
