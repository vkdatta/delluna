export const name="subtitles_off";
export const id="dl_8eaa49bb47474a90bc60";
export const url=new URL("../icons/S/subtitles_off.svg?v=4db177ab63297b52cc2e0dd6c208efbfa634a0d074965eedd9d11c255ef759b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
