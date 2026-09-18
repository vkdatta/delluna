export const name="north_west-fill";
export const id="dl_12bfce4c43774dd7855d";
export const url=new URL("../icons/north_west-fill.svg?v=e7c6d98c8f28e540885344d659c321b1e27feae54272981e4c482533a150fbe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
