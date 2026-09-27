export const name="solar-panel-bold";
export const id="dl_0eb91da92f3d56f2ab43";
export const url=new URL("../icons/solar-panel-bold.svg?v=7cd175729ef51a7a253f66da9f1134bfdc1d99fb4a0e4fe7e227aa8545aa19b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
