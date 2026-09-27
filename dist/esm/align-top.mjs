export const name="align-top";
export const id="dl_7255c99874c54985bd58";
export const url=new URL("../icons/align-top.svg?v=3ab354193f0c295300de040c9a01ed3342972d101218644dd0f3a97e96fdbd6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
