export const name="help";
export const id="dl_6dd33469edbf44d307a9";
export const url=new URL("../icons/help.svg?v=d1c51f29c8060ee14c8b22a83a0b3bec8d701b75b752a9dc05c4a52edad1e316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
