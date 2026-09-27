export const name="person-simple-walk-thin";
export const id="dl_2ba0ce4a40f240969424";
export const url=new URL("../icons/person-simple-walk-thin.svg?v=1103e214e665412b24ae483b63a60ad740cc7f493fb897cd3c37fde2359e3c29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
