export const name="circles-three-plus-thin";
export const id="dl_0df3c54eeb2841ff8713";
export const url=new URL("../icons/circles-three-plus-thin.svg?v=196000c1e826776cf8dce1611c01fc25f4a17df76b1c01e6d9650fbc243d3a0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
