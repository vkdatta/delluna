export const name="codesandbox-logo-light";
export const id="dl_f6d1e163f23a4637a24c";
export const url=new URL("../icons/codesandbox-logo-light.svg?v=8a76eb74227e839a4057ba19a972f0458b01f7a5ded8a314a18e923cb4e343b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
