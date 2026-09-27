export const name="add_location_alt";
export const id="dl_27966d9a14677045f02a";
export const url=new URL("../icons/add_location_alt.svg?v=ed1d9998bd1dc70be240afd7433c0d31e33a140578748deae9c00ed8714a1acc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
