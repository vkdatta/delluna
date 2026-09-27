export const name="lucid_1-computer";
export const id="dl_76e82f85969a4e44b390";
export const url=new URL("../icons/lucid_1-computer.svg?v=15a4d23d10b1e9c8910e00603c6d556732e2c16f81df62fdf8e0c0eb2f5e5062",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
