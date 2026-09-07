export const name="check-thin";
export const id="dl_a041fc77ef234e8cb5f9";
export const url=new URL("../icons/check-thin.svg?v=74568669f754819b4a88d050bb3a8bb5824e23f61e1e1798f71cc556738d202c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
