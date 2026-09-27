export const name="codesandbox-logo-bold";
export const id="dl_b1a8fec30c0646b69f3b";
export const url=new URL("../icons/codesandbox-logo-bold.svg?v=cb1c1eb4c8f10eaa975aeb9accd476c0c75466ec7b8670620d48c2ec57ee13e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
