export const name="speaker-x-bold";
export const id="dl_23a2486c65d947f3b4a1";
export const url=new URL("../icons/S/speaker-x-bold.svg?v=e87755ff3b696c34c65e2717cca4258c7cfa4aaced5185646ebbbb7c716c0ed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
