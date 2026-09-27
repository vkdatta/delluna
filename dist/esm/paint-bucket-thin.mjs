export const name="paint-bucket-thin";
export const id="dl_c638fa05d037437e9422";
export const url=new URL("../icons/paint-bucket-thin.svg?v=e4c07df90e5c71661a94e2d1bcd71c8b81496817343d2579e6698b7208804f34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
