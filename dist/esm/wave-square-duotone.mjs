export const name="wave-square-duotone";
export const id="dl_256edb6c8e6355059de2";
export const url=new URL("../icons/wave-square-duotone.svg?v=18cbdfe68f88cb2defd7c3285db27e4037ac224a24c71a90192b4a52e03f3855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
