export const name="select_to_speak-fill";
export const id="dl_3c2f9fe1240b6f398b0d";
export const url=new URL("../icons/select_to_speak-fill.svg?v=f78d744b34dbd9462e1d51ec7de43726033915a9367e6a46bde7d3022e61d04e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
