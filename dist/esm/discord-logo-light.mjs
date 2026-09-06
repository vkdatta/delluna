export const name="discord-logo-light";
export const id="dl_df0e4e3c0aff41699b89";
export const url=new URL("../icons/discord-logo-light.svg?v=89265e9cd357025d463b53790ecbdb7351cf0fd6ede81577f50f54291753762b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
