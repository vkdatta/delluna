export const name="option-fill";
export const id="dl_8ef5a83e9e4e46c89b38";
export const url=new URL("../icons/option-fill.svg?v=36ffb5473a1b0714261573b44e7d8b993321700b8e3b0a36581b323f401c6298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
