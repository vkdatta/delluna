export const name="calendar-heart-bold";
export const id="dl_09efb0e980114ca0a064";
export const url=new URL("../icons/calendar-heart-bold.svg?v=9efdb5f76a3057db13cb6a576e1e7709e86c6a43d1227cad88d4c52ec0c8245a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
