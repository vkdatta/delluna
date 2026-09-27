export const name="laptop_car";
export const id="dl_9da8b77304019c08cf3a";
export const url=new URL("../icons/laptop_car.svg?v=11c7e437ef7f7850737cc137094f586f54f18275c13775f1539071516a9014ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
