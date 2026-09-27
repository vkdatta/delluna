export const name="lucid_2-forward";
export const id="dl_a3dceee7ac0f4582892e";
export const url=new URL("../icons/lucid_2-forward.svg?v=dc21b3e3d3812c62e7682a0781254007524aa3b73d2bc628f6ed2e0b38ee17d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
