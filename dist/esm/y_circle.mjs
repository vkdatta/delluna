export const name="y_circle";
export const id="dl_08e4c677b1507ffad956";
export const url=new URL("../icons/y_circle.svg?v=293f1c7c16f8c28e858ffc4b16e2eddc8c8f46d99626d07a6ab2c0af224a9270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
