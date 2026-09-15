export const name="expand-fill";
export const id="dl_4086b2cedc43449d8e24";
export const url=new URL("../icons/E/expand-fill.svg?v=e7267dfa2095194841399d19b353c8f45f7dc796de3e8849e0d8b9d9e7df4b7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
