export const name="text-align-right-duotone";
export const id="dl_58bbf12385dac640573e";
export const url=new URL("../icons/text-align-right-duotone.svg?v=e408c03eebcf1a070cde016cc1b00172ad8526dda548756257168b7b14e16178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
