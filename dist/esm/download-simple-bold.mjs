export const name="download-simple-bold";
export const id="dl_725e12e0f2b34e518221";
export const url=new URL("../icons/download-simple-bold.svg?v=22e985641aff5d04ac5b1be27e53eb2aca89d21eac3acd6c30cb9761886624c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
