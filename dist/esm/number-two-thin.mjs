export const name="number-two-thin";
export const id="dl_2d8b16b9425344729555";
export const url=new URL("../icons/number-two-thin.svg?v=b815d53f4cfc96499f27a5b57f990d8e54e1c4120be79503f607849b16b73754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
