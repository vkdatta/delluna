export const name="mobile_share";
export const id="dl_5674b69f9bb123e831ff";
export const url=new URL("../icons/mobile_share.svg?v=14585166b42b5d782268d45ee9e1c7ab3e236459e624160a9b86d42578c43e9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
