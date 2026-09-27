export const name="hanami_dango-fill";
export const id="dl_6f76a5296b81f9f1274a";
export const url=new URL("../icons/hanami_dango-fill.svg?v=ea6327372b9600daebb2754357db6063ffd469863b776c90690b90894781e659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
