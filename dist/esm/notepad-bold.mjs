export const name="notepad-bold";
export const id="dl_d6c025e0177c463088d6";
export const url=new URL("../icons/notepad-bold.svg?v=a887b5b4254c4805b048103b3b0e2658d5da572ed0e3dddf12293d04c6b7e5c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
