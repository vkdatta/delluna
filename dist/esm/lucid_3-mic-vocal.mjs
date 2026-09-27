export const name="lucid_3-mic-vocal";
export const id="dl_4468c680e4d646b38859";
export const url=new URL("../icons/lucid_3-mic-vocal.svg?v=9e894e8fd412d5bbec3d8bfb511654da6fcf66c89342051b367cfcb8cecf4cea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
