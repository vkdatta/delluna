export const name="solar-panel-bold";
export const id="dl_808e4c29ac9444dfb13b";
export const url=new URL("../icons/S/solar-panel-bold.svg?v=21e1ef7a2b0c29ec760da7ac37415c7e8cfc944d0e6de416dc7ddd521d7a8500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
