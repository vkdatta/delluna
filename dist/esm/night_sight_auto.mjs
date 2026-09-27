export const name="night_sight_auto";
export const id="dl_11c022ece046d720ab85";
export const url=new URL("../icons/night_sight_auto.svg?v=02e7562ba46fc7f857642773988af9a2a9a6612a4ba18b4624721378564bb7c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
