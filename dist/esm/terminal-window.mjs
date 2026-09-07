export const name="terminal-window";
export const id="dl_1e20a664c2b8408e8b73";
export const url=new URL("../icons/T/terminal-window.svg?v=5ee2be45ae5f7ff95d51e142baad1103cd8b473f89e69f983f3f5b40c884327d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
