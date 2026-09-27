export const name="arrow-bend-down-right-fill";
export const id="dl_9c1471764efa4f92b53e";
export const url=new URL("../icons/arrow-bend-down-right-fill.svg?v=72003e168c085d67e6b48f1d469c20fa1f62c6a736e19d6506439741996d2779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
