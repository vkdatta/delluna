export const name="vr180_create2d-fill";
export const id="dl_83a68ded9137815611f7";
export const url=new URL("../icons/vr180_create2d-fill.svg?v=05ca9454d2e080457a2103baaa65426e8480800babc484a09e561d9ebb571552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
