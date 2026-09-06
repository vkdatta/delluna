export const name="javascript";
export const id="dl_18e9ea304662c1d11b07";
export const url=new URL("../icons/javascript.svg?v=6a60cf631e31a0a6d180376d4c4d285681c8da656caf18a5caa4d63409076b1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
