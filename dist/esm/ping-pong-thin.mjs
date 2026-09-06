export const name="ping-pong-thin";
export const id="dl_320153766cfb41da92f1";
export const url=new URL("../icons/ping-pong-thin.svg?v=25a4d4d74ed560bfd6afff10bc715250da840e7793936f886f74670f23055a67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
