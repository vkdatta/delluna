export const name="battery-vertical-empty-fill";
export const id="dl_7461c42e2c0149b28113";
export const url=new URL("../icons/battery-vertical-empty-fill.svg?v=6122fcc074cfaea153615dd9f231cb174b0467927c0be5922d046cb68e980af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
