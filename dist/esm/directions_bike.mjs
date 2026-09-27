export const name="directions_bike";
export const id="dl_6884d0a886b85125dadb";
export const url=new URL("../icons/directions_bike.svg?v=255c712254b88579d0bc3e1bc3386a15f7f53650312fd6ad8a49620197116bae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
