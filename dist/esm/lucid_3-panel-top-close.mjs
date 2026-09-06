export const name="lucid_3-panel-top-close";
export const id="dl_8fa3ff1146354206bf12";
export const url=new URL("../icons/lucid_3-panel-top-close.svg?v=b1e346428631969304e2bfbd5e33ab51da25e92f5520b380a3a300a0cd25e587",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
