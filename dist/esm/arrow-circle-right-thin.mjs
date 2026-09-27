export const name="arrow-circle-right-thin";
export const id="dl_12313ae8acc04ff5b531";
export const url=new URL("../icons/arrow-circle-right-thin.svg?v=30d641bd3da26ee58e31b60b183d46aaaa6e03471941342a58e7b5c04c8b7089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
