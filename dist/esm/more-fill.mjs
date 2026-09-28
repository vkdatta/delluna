export const name="more-fill";
export const id="dl_eb8b9a5314367d684bff";
export const url=new URL("../icons/more-fill.svg?v=055fd93b80cad692e98bfffa0f8f3c12ea89a037bd8b2479e50a5b2ee1ce24d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
