export const name="stroller";
export const id="dl_d03ed0dfd4d24148874c";
export const url=new URL("../icons/stroller.svg?v=1c688b7e9e4f110444a435c7d622d1b69ef458a5085708433a8e4821cbf06176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
