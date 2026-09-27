export const name="circuitry-bold";
export const id="dl_de577c3b3009452383b3";
export const url=new URL("../icons/circuitry-bold.svg?v=9bb8f9c1384d46b5456f28c8b80f98f193b36637569d91f667b0748f9fc5a964",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
