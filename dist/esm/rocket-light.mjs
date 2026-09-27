export const name="rocket-light";
export const id="dl_c860263b968343b18cfc";
export const url=new URL("../icons/rocket-light.svg?v=98352595b368caa05f1049d106e4d2bdf0bde7a1af7cde17484b208fe460b421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
