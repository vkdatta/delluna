export const name="tornado-light";
export const id="dl_4700433c68e749b08b3f";
export const url=new URL("../icons/T/tornado-light.svg?v=6409a6cf1d77ab59e500b91b1d004931436d5b0d552157f7eb40bbcd7dd14cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
