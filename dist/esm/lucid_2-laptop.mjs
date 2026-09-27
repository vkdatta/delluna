export const name="lucid_2-laptop";
export const id="dl_e81313314c6348a09a9a";
export const url=new URL("../icons/lucid_2-laptop.svg?v=886a8aac1c730e50b1d24ca97ccac385936bc3ab025c6b48339c847764a79f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
