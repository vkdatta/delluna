export const name="spa";
export const id="dl_3112dc0cd125a19ec245";
export const url=new URL("../icons/spa.svg?v=ba481b261a0f6ab4a1410f2f45a00cae2747e216329da50911d5ec16c531c7ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
