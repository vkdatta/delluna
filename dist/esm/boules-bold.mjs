export const name="boules-bold";
export const id="dl_faa34ae77c5244abbf3a";
export const url=new URL("../icons/boules-bold.svg?v=30d970bfdccf900f1b8c417f8ad6f182e63f116321b9ac97681b6f01a308cc1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
