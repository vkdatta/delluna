export const name="gas-pump-thin";
export const id="dl_f712a62750024f148314";
export const url=new URL("../icons/gas-pump-thin.svg?v=df038d7fb6843e25170d99f95d4f015bee45e1daaeb722dfea2c2b08d6dbe26a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
