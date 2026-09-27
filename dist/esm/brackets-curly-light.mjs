export const name="brackets-curly-light";
export const id="dl_57495f520bc04ad28632";
export const url=new URL("../icons/brackets-curly-light.svg?v=04e11f8a47c45ea8d3ae581b9ebb163d89fe7d4cf586473828399c136597a49c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
