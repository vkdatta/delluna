export const name="battery-vertical-full-duotone";
export const id="dl_0f9ce76c4c244065a082";
export const url=new URL("../icons/battery-vertical-full-duotone.svg?v=b4e5b974b83eba173de4701ecabc7a1c18a2af7709bd989c226c2f27bd7d8d6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
