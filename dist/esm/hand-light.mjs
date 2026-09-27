export const name="hand-light";
export const id="dl_9bed9def420148f5a555";
export const url=new URL("../icons/hand-light.svg?v=295d0da047a3fabb3a478164fe470aa33e5fc22028b56ac6af8eff89a6e1cbb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
