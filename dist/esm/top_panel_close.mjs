export const name="top_panel_close";
export const id="dl_7600610c781485633600";
export const url=new URL("../icons/top_panel_close.svg?v=ac6d0fc3b6e9e27b1adf6aa492c1ab1837388bb4808c73bb7e890d57b99430ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
