export const name="mitre-fill";
export const id="dl_e6e76c0f69e574fcb645";
export const url=new URL("../icons/mitre-fill.svg?v=2411290b9f1ba17463c35ae11e6a79ba646fde559e7e5226cac68801f57c361f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
