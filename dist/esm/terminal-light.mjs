export const name="terminal-light";
export const id="dl_cbae15fb4f598bedb12b";
export const url=new URL("../icons/terminal-light.svg?v=910f65edd939d2f2b276f5fcaae96d07262b5f2b37121421f7a2023c541464f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
