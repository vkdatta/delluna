export const name="lucid_2-diamond";
export const id="dl_cafbbf7576f845f6b073";
export const url=new URL("../icons/lucid_2-diamond.svg?v=0c393811e526a9f0cd90581cb5d6ae1952374775c743ef2c40dae7b648fa6f4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
