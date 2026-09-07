export const name="terminal-window-duotone";
export const id="dl_2af15d8a7a6d4a669ee4";
export const url=new URL("../icons/T/terminal-window-duotone.svg?v=b2ec046efc1d26eb65403a18ee340892339842af943d24ad337ded935d2e5df2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
