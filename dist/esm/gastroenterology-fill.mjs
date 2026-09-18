export const name="gastroenterology-fill";
export const id="dl_fde38a9274f44257ade8";
export const url=new URL("../icons/G/gastroenterology-fill.svg?v=7d90a2e8cc50b8d4f07fd7bc89cc9475abe92ffe703c4851284184b7be593851",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
