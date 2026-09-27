export const name="arrow-circle-right-thin";
export const id="dl_12313ae8acc04ff5b531";
export const url=new URL("../icons/arrow-circle-right-thin.svg?v=e53b3d478a4c4f86d15caf55b9acc2265da30efb59521582c2a6e5dfd96ff646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
