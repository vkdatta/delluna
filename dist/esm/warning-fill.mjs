export const name="warning-fill";
export const id="dl_ae3df4b98517ecbf4d34";
export const url=new URL("../icons/warning-fill.svg?v=b73c6d0c1b7a13fb9ca457168ced1dd5bea59a64b75087eb276554b0915c4f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
