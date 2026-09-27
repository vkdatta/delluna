export const name="brackets-curly-bold";
export const id="dl_a4ba393c0042471aa1f9";
export const url=new URL("../icons/brackets-curly-bold.svg?v=38f8fb028a37b25f87c38ca388dc88857a85f49d704ac0cab79b8859e0d5b3ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
