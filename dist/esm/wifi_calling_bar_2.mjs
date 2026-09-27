export const name="wifi_calling_bar_2";
export const id="dl_883dded0af4a1a9e996a";
export const url=new URL("../icons/wifi_calling_bar_2.svg?v=2951bab659ff77f9c474f6b9a050a42a9bf9baddb43002cbb45033624ee88228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
