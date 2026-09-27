export const name="visor-thin";
export const id="dl_280060cbef04bc698547";
export const url=new URL("../icons/visor-thin.svg?v=f2724f754ec5f2a65da8322d723c62b7112343c904043aa0449424d743b29623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
