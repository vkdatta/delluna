export const name="game-controller-fill";
export const id="dl_8daa2462cf6742908ee8";
export const url=new URL("../icons/game-controller-fill.svg?v=098ef8f1adc50e36074b81d290ce49ef1d34c5ac2a09d71e315c116129d4f9ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
