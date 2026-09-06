export const name="backspace-light";
export const id="dl_3d117841a9544015984d";
export const url=new URL("../icons/backspace-light.svg?v=64beacfa4e5ac449a82e0ad078eea16e9e89e6b9a83a4c3285267c57e0085aa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
