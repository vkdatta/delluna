export const name="codesandbox-logo";
export const id="dl_f63a3dadc9c64140b6af";
export const url=new URL("../icons/codesandbox-logo.svg?v=d311ae24065bd106c6f1de03910c4feec596d48cad8be175542d0775d124c9f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
