export const name="light_mode-fill";
export const id="dl_9f42433e35f106e92afb";
export const url=new URL("../icons/light_mode-fill.svg?v=61a39276d945829c6aaa28e317fc77dfac885d5e9e10767d5bc5dc6bd5e4683c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
