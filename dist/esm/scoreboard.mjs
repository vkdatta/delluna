export const name="scoreboard";
export const id="dl_d34ebc1516ec504a3303";
export const url=new URL("../icons/scoreboard.svg?v=249cf8fdc7f30ea31b30e7e429657771a19e6d17c757ce32b992a50ff07be4ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
