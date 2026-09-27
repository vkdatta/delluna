export const name="file-jsx-light";
export const id="dl_8e4ae84e871d43d882ba";
export const url=new URL("../icons/file-jsx-light.svg?v=faa44f7ac03940e272b66908a460e1fa2c860e7a84f1486982573d622e5b6e6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
