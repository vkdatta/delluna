export const name="triangle-alert";
export const id="dl_2bf1b2da7bcc4f03bf0b";
export const url=new URL("../icons/triangle-alert.svg?v=36fb4a9d712fb8103305a1d44bbd7125f503af91b457bc55b699cad278ab1acf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
