export const name="monitor-arrow-up-thin";
export const id="dl_5fa953de5045477a9640";
export const url=new URL("../icons/monitor-arrow-up-thin.svg?v=ddee9c1f764e7010ef1f37b4baea2b79dc313e5274e281f29bd22ee931b206de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
