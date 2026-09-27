export const name="metronome";
export const id="dl_7dcc7780398e4c208655";
export const url=new URL("../icons/metronome.svg?v=eab6a2ca97ec59dd036a055ffc906b1d1ee5157fe68dbf4438fb45ef9736eb5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
