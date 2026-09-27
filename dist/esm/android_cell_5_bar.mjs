export const name="android_cell_5_bar";
export const id="dl_21783ab90da6bf07b42f";
export const url=new URL("../icons/android_cell_5_bar.svg?v=e4304f215ec42759f93ba44d118860271c1814f8be343491030f899a05f2a45d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
