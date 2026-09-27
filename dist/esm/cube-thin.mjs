export const name="cube-thin";
export const id="dl_467b2a1188004d909922";
export const url=new URL("../icons/cube-thin.svg?v=d95c394e3f52778705abf153612228178d20e854be0441e43101eebba7c6f333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
