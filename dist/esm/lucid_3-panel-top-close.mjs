export const name="lucid_3-panel-top-close";
export const id="dl_8fa3ff1146354206bf12";
export const url=new URL("../icons/lucid_3-panel-top-close.svg?v=fce1c6a0fe55e537893f59ae7c73fb1ab3937512c2bd728cd34bc6bbf164439e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
