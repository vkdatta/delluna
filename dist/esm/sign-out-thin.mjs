export const name="sign-out-thin";
export const id="dl_c108f4b7765768dd4ed2";
export const url=new URL("../icons/sign-out-thin.svg?v=7f66caca6a9e2d1707c906792565f45ba8255c170392fc7d382370767070b54d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
