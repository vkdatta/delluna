export const name="caret-down";
export const id="dl_3cf239937972443f8fcf";
export const url=new URL("../icons/caret-down.svg?v=2e728c38b81155265854969b8dfb2927353accee2c84500cb4baa632403ee056",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
