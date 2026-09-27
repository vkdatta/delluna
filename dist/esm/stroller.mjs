export const name="stroller";
export const id="dl_24d0b5ef9a15952e6ad9";
export const url=new URL("../icons/stroller.svg?v=39a7dca495e9138559ec30a6362a68a8f070060640f49c8f6c51f569ccf7c0c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
