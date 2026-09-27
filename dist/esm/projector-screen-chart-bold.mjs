export const name="projector-screen-chart-bold";
export const id="dl_c248b61450b7461db766";
export const url=new URL("../icons/projector-screen-chart-bold.svg?v=cd78bfcab2fcbb9d6de6d80bba4a99b0ed311190fd63f51435bb24451a2911f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
