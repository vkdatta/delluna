export const name="rectangle-dashed-bold";
export const id="dl_a5210cfbe77b47639ab5";
export const url=new URL("../icons/rectangle-dashed-bold.svg?v=fcb2e1ca49393804a5ea1e41a567a691f81047371a07f1cc5542fba5ddd3fe57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
