export const name="laptop-thin";
export const id="dl_9550a3190c2f45e5ae40";
export const url=new URL("../icons/laptop-thin.svg?v=7b9a19348903abf9454da829da9dc3038da891ae0aa8281b82d9983fc8df92a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
