export const name="airplane-landing-fill";
export const id="dl_0b0d629fdea847bda49b";
export const url=new URL("../icons/airplane-landing-fill.svg?v=96843b4a9c7c92c9a3ac421ca06504afd2a89950c8311bb4ff598f690da20bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
