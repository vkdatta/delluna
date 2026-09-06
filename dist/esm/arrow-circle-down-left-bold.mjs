export const name="arrow-circle-down-left-bold";
export const id="dl_fa2a59a771014d558556";
export const url=new URL("../icons/arrow-circle-down-left-bold.svg?v=c3f113924a64b76fc5607501f1bdae3c658fe034f2d888afc9befd47cb3487d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
