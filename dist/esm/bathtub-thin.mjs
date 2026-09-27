export const name="bathtub-thin";
export const id="dl_a964920448d449ccae3c";
export const url=new URL("../icons/bathtub-thin.svg?v=e3380efe29781548516dc583ec4e0e758a03d8d38bfc3c88983e5027eb161521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
