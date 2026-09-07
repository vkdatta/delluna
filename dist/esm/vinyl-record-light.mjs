export const name="vinyl-record-light";
export const id="dl_5e72700b94ed41aabdc8";
export const url=new URL("../icons/V/vinyl-record-light.svg?v=db952f425083ee96da0fcf883e0920472ec428683e3936f96fbae19e0e62a387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
