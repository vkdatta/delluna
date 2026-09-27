export const name="csv";
export const id="dl_dd43b6fcf7a4ca623d9e";
export const url=new URL("../icons/csv.svg?v=f826a8b815c8927211a8e7f8e275dfcdfc21b4b109640090d9445ec9afb3cb74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
