export const name="arrow-fat-lines-left-duotone";
export const id="dl_638df5c0b0794133b04c";
export const url=new URL("../icons/arrow-fat-lines-left-duotone.svg?v=1cbaf93650528f7e6216928f376decc87972c820482426c21e5b68d8777c97a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
