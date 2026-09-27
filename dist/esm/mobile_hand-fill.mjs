export const name="mobile_hand-fill";
export const id="dl_8f039fad120515464c79";
export const url=new URL("../icons/mobile_hand-fill.svg?v=04cd6f55050f10f25b7a43911957eaa90643eb2a89aac57105b6c92fb6198035",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
