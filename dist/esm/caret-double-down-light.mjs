export const name="caret-double-down-light";
export const id="dl_761ec8bd66d645a485cb";
export const url=new URL("../icons/caret-double-down-light.svg?v=1d07befcfb809f1ac77004cc2c3be8b84b197cb0507f4126f2ae12d897bfa18b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
