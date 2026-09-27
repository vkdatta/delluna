export const name="looks_5";
export const id="dl_41af83bef8ade8f7876e";
export const url=new URL("../icons/looks_5.svg?v=45d2cbd1c51fce29f956f3df9df2468d8a943d8c39bd61e3e0e5251ab1bb754d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
