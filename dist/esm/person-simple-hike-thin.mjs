export const name="person-simple-hike-thin";
export const id="dl_046ea123dfe24621bd49";
export const url=new URL("../icons/person-simple-hike-thin.svg?v=953ecd8b6eca4e65328a85b48b8a96bc5e5bad959a2477bc123dd86fec46db32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
