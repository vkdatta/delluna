export const name="detective-duotone";
export const id="dl_af1fb4949b4347d4b34a";
export const url=new URL("../icons/detective-duotone.svg?v=8f641fcde2a6f67687221f5b4a4c4f81bae484edf25574314d622b4123241a65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
