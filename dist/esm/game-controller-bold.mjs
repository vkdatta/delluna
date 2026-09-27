export const name="game-controller-bold";
export const id="dl_4f46da98846a48a58725";
export const url=new URL("../icons/game-controller-bold.svg?v=c729f8a320758733697adae4b74a8a893df46d9dc41f024566fc914fc9564fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
