export const name="crane-tower-thin";
export const id="dl_047b43da9bb14ace8cf5";
export const url=new URL("../icons/crane-tower-thin.svg?v=ec1117459b71aaf5fba8d37b76ec9e1c8b75401269837193c2bf109f3d97f3b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
