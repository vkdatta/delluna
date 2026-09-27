export const name="computer_sound-fill";
export const id="dl_7d651f59ee0f50c13fbe";
export const url=new URL("../icons/computer_sound-fill.svg?v=1648031efa86cc980c6ab5d366ab4e7efc47c62f5a221b60eb2e07192791d21c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
