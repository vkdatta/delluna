export const name="pill";
export const id="dl_08eb62b04494427cbf37";
export const url=new URL("../icons/pill.svg?v=fb02779d07fb674628f80005bc193bf660056daa663dbbe5e861117f5e914378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
