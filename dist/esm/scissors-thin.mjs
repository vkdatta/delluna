export const name="scissors-thin";
export const id="dl_3c32fc0ae7651876ee52";
export const url=new URL("../icons/scissors-thin.svg?v=d40f95a24dd4b7262b5825d7915d997946c329d4da441781707ada5ccf07b881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
