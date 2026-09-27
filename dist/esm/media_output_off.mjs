export const name="media_output_off";
export const id="dl_7bdb36b1a0665286dd7d";
export const url=new URL("../icons/media_output_off.svg?v=79a1a02475346ad847d99bfecff0fd3b47217999ea7228993682bd062d45ea6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
