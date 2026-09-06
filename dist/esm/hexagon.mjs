export const name="hexagon";
export const id="dl_8c53195de07547b282bb";
export const url=new URL("../icons/hexagon.svg?v=de7b04d20262cf4ecd87147c7eb85552e21d329d12b6c4b7e0ff683af9ad2eaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
