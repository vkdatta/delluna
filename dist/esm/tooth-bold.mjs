export const name="tooth-bold";
export const id="dl_6c740ce359eb4ebfad88";
export const url=new URL("../icons/T/tooth-bold.svg?v=36f82334f095e7dbf964f9dd5a4befe17af5349c7b40bacd8762fc8f3c7160cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
