export const name="circles-four-duotone";
export const id="dl_87a3030ff045473e9e9e";
export const url=new URL("../icons/circles-four-duotone.svg?v=78e7e245826dbaaa8077dc74f98393432650165763a88688d3a4bed8c2fb7c11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
