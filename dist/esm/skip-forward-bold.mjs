export const name="skip-forward-bold";
export const id="dl_ea9749c5eff24805a4b1";
export const url=new URL("../icons/S/skip-forward-bold.svg?v=c026db317873f9de39d620b20e97d9d9d11293bbc319b0ea90db03db9c706be2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
