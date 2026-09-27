export const name="wb_auto";
export const id="dl_fd7211cf8c3a9a43bb54";
export const url=new URL("../icons/wb_auto.svg?v=ff5dac0b7a4bc279999e64d56a9b25ba7615facbe27c65e95e8054bfd7951718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
