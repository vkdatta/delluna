export const name="number-square-two-thin";
export const id="dl_2a0852e20da641c9a7c9";
export const url=new URL("../icons/number-square-two-thin.svg?v=1197671b53b36d59412ae60e4b4cc5e258d71491ef010563520c09954b6e52d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
