export const name="speaker-x-bold";
export const id="dl_0707aabf2d273e1f7e31";
export const url=new URL("../icons/speaker-x-bold.svg?v=e87755ff3b696c34c65e2717cca4258c7cfa4aaced5185646ebbbb7c716c0ed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
