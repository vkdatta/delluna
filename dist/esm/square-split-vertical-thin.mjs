export const name="square-split-vertical-thin";
export const id="dl_84e588fa2978497da04a";
export const url=new URL("../icons/S/square-split-vertical-thin.svg?v=ac3d7e18ba079b98ae7eb52eabbed067164ebf2a78a2959d053c9a2176b87945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
