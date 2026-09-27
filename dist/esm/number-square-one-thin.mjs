export const name="number-square-one-thin";
export const id="dl_9156b0aa0fa648439d92";
export const url=new URL("../icons/number-square-one-thin.svg?v=06bcb279463c6dd0fa4b535a2b718d60c35b4493d7b42552e51d98a89bfdb528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
