export const name="square-half-bottom-fill";
export const id="dl_523cf6a6e77afb375e8b";
export const url=new URL("../icons/square-half-bottom-fill.svg?v=5c57317debd7c27e677f9626d172851d4b41288c7e586169716be7e2cb57ef2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
