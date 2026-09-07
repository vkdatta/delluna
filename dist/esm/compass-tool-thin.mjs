export const name="compass-tool-thin";
export const id="dl_173cac8b07c34aa0a0e8";
export const url=new URL("../icons/compass-tool-thin.svg?v=db3e6d4a886e7f5eadea2ab486782dab956ecf633b0cb1d37e7049d4c7ed264e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
