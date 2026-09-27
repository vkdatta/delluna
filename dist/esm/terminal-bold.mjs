export const name="terminal-bold";
export const id="dl_a35aedc3e5b0be64fb61";
export const url=new URL("../icons/terminal-bold.svg?v=aab8b6bcbb9d35af36cceef510b7308648e5742a360804b539bdb75586793966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
