export const name="lucid_3-panel-left-close";
export const id="dl_12ae4e6bff64423aa239";
export const url=new URL("../icons/lucid_3-panel-left-close.svg?v=5b06957e60d8fdf6d3c3153d4acf37a249c1b5d60f528d7dd318366ca71e657f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
