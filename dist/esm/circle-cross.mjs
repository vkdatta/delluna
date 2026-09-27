export const name="circle-cross";
export const id="dl_44b02511a4350e19e9e9";
export const url=new URL("../icons/circle-cross.svg?v=375734bc4054289e2c355faa0241b8b396b87a6d7bf41ee87872e35936dae2f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
