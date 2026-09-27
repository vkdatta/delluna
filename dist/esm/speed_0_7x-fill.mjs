export const name="speed_0_7x-fill";
export const id="dl_2e0d03901c4deb5b1629";
export const url=new URL("../icons/speed_0_7x-fill.svg?v=3aadada04e8aa2a4ff061e4443bbd9a39e81f49f629e2d5ddacd269c1d96becc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
