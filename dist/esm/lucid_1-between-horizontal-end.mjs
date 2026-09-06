export const name="lucid_1-between-horizontal-end";
export const id="dl_4fce8e308bd74dffb536";
export const url=new URL("../icons/lucid_1-between-horizontal-end.svg?v=34cc504e16a821b8ee8f27c2e061979761cbdeacb749bb64474966c2c106964f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
