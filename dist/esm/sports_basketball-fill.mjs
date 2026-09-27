export const name="sports_basketball-fill";
export const id="dl_e02443ce68f01e85221e";
export const url=new URL("../icons/sports_basketball-fill.svg?v=d57698219f8799985170bc5452f2192e133c287dc704e763f2b8eea7a4465af0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
