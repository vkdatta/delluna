export const name="game_bumper_right-fill";
export const id="dl_7cf07f6af5bc2361a53f";
export const url=new URL("../icons/game_bumper_right-fill.svg?v=8c6a5ae7420c23420dc7ad4d1876cbbc1783b808f7f9a499f87a95a1db2d6018",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
