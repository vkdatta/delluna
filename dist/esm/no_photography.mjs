export const name="no_photography";
export const id="dl_12004aefa43b63d71e60";
export const url=new URL("../icons/no_photography.svg?v=cec2c42e5d5991a5940b9e3270b4440cb95098728a82c34d997ffc894f8c0727",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
