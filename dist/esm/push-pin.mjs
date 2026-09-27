export const name="push-pin";
export const id="dl_b16888fc9b18403584d7";
export const url=new URL("../icons/push-pin.svg?v=e884f941a5640b3d63b4e7c861b5424fb863e0066fd26df8ea7126cbab529779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
