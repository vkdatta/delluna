export const name="library_add";
export const id="dl_833a7eb6dd7f1f03053c";
export const url=new URL("../icons/library_add.svg?v=52470e422c5912c789ee569ff9277b8cc7f0e0ff3839a916ed0d888b83cf3d5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
