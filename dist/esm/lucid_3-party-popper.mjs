export const name="lucid_3-party-popper";
export const id="dl_9989bd2242ab4342a903";
export const url=new URL("../icons/lucid_3-party-popper.svg?v=133c3ca07136b8ba18029180b82a3a2da575510049d240c6ef796a0c62093751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
