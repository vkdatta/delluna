export const name="road-horizon-bold";
export const id="dl_c2beb3c79d114b0e99d6";
export const url=new URL("../icons/road-horizon-bold.svg?v=e88c8fea3ff680ba35ba1f3b4ed6ef46abc4b104be4220340beec94ca7290600",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
