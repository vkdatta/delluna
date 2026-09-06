export const name="lamp-pendant-thin";
export const id="dl_86839f598b6b4d78a52d";
export const url=new URL("../icons/lamp-pendant-thin.svg?v=6d57a052296ef7a3933d53738a69fed5a4bfcebed1d002fca24eea0cf12aaf7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
