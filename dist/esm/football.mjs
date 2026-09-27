export const name="football";
export const id="dl_8a6ef5950d9a4f8bb9c0";
export const url=new URL("../icons/football.svg?v=16f576bd9cf68de13485dee555e7e00520eb51f8ac530a29f9399e5374c7eda6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
