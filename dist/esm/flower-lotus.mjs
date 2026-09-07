export const name="flower-lotus";
export const id="dl_008510345f514aa4a6eb";
export const url=new URL("../icons/flower-lotus.svg?v=72c25597f9950e6a61d79332842e0fde2b17f3aaeceba130a831eda219274706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
