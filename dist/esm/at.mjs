export const name="at";
export const id="dl_537d3346108f45e78848";
export const url=new URL("../icons/at.svg?v=a921febdb86639c76b4b67a02bfc457e6785858bd816a4afa470af0479326b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
