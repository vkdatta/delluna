export const name="hourglass-low-duotone";
export const id="dl_4799a51885994bb5b6c4";
export const url=new URL("../icons/hourglass-low-duotone.svg?v=1711671b605a65e5c91b31e1cd8f46556bf99ae7194026c10e26bd7f80a44a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
