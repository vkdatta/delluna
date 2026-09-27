export const name="terminal-fill";
export const id="dl_55ea7d3bea22a24d16e2";
export const url=new URL("../icons/terminal-fill.svg?v=aeb1fc904ba7db8cc8a9b5cd6d17710925e3e5f549763a9bd268358ec0a531a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
