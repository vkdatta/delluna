export const name="dev-to-logo-fill";
export const id="dl_be9a9fc7bc3c4ad48bb8";
export const url=new URL("../icons/dev-to-logo-fill.svg?v=53dda9614e3bd3aba6559e6595529396d30644f830c012dc262fbe43fade18f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
