export const name="drop-simple";
export const id="dl_d4cd8fe355f549159953";
export const url=new URL("../icons/drop-simple.svg?v=88ce3435d4f8df34b4365e4561d9edcee2b6618603e94d1d6ea861c5df4f1380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
