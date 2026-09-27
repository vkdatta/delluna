export const name="lucid_2-list-chevrons-down-up";
export const id="dl_8c3f5a31b788449aa28e";
export const url=new URL("../icons/lucid_2-list-chevrons-down-up.svg?v=3c0a21ef2e5a35ec68d90591eb84413ebcb51ce0809d4fa53fc1b8638f85368e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
