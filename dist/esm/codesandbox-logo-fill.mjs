export const name="codesandbox-logo-fill";
export const id="dl_1389f4ace47e456aa0fe";
export const url=new URL("../icons/codesandbox-logo-fill.svg?v=d4625d11802498b752515da14babcb73f997d4295098d944393b5c8cfe16acba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
