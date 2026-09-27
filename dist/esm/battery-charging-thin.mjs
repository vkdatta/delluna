export const name="battery-charging-thin";
export const id="dl_c1ec99666fe2412dbc4d";
export const url=new URL("../icons/battery-charging-thin.svg?v=92f34987ccd0a24c00ac4f4119163712a41836a49e32ce245699dd7f388dfe4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
