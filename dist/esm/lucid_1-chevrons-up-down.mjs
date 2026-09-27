export const name="lucid_1-chevrons-up-down";
export const id="dl_6bb6cc67ca7343028dc6";
export const url=new URL("../icons/lucid_1-chevrons-up-down.svg?v=ec1de653fbe6f39b6f2e46680239bdb6df798d97b9cb92d1ef90aee862a55daf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
