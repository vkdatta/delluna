export const name="cursor-click";
export const id="dl_c43510ac03dc4461a54d";
export const url=new URL("../icons/cursor-click.svg?v=7d0f5e8ad2fc740656af1946f79070ba94e518641d9d100dc2334e3843453a8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
