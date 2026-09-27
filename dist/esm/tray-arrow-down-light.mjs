export const name="tray-arrow-down-light";
export const id="dl_f1dde59c466d52b0870c";
export const url=new URL("../icons/tray-arrow-down-light.svg?v=ce2a54339a9fb796f6ba7632c8ce4a4d6f0972d9db8403b92cd32d16c3d5285d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
