export const name="cpu-thin";
export const id="dl_18ebb583ed224b979177";
export const url=new URL("../icons/cpu-thin.svg?v=4def7787b9e000790a7e277d2dae5d4b690b6938a1efeafb31252910b5cadb7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
