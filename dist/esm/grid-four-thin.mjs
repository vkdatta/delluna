export const name="grid-four-thin";
export const id="dl_bfb19396f4fc44fc805c";
export const url=new URL("../icons/grid-four-thin.svg?v=5a06b19ebbbf96964ef14bc973498bf2b838cb6b020f10953ea352d8766fbd8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
