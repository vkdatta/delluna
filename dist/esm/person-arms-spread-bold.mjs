export const name="person-arms-spread-bold";
export const id="dl_fbbb898c1b8e4d38bfcf";
export const url=new URL("../icons/person-arms-spread-bold.svg?v=2268c6f41261ef1ac635a94278c314fd576da3e0edbd420dca1f6df7f9f064cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
