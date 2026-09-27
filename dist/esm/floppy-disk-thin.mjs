export const name="floppy-disk-thin";
export const id="dl_b5ab5936bafe4d768133";
export const url=new URL("../icons/floppy-disk-thin.svg?v=682585ab0a13686c52ef7609ed0a64661aedec48354022a978eea336dcc58465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
