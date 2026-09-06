export const name="ny-times-logo";
export const id="dl_4a1bedfbbfa54654b67b";
export const url=new URL("../icons/ny-times-logo.svg?v=dd716ceb06bb7dacfc3b71862992e0111d174a185a6215dc98d5358d42ae752f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
