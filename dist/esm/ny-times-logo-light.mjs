export const name="ny-times-logo-light";
export const id="dl_8062930d98d64208a235";
export const url=new URL("../icons/ny-times-logo-light.svg?v=8c5fb55afb9b721467de00c75cd3983adccd8ceb6c218f4babc7182c0859352d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
