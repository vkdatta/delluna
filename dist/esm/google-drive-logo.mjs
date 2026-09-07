export const name="google-drive-logo";
export const id="dl_f7e09318c8b4471cb825";
export const url=new URL("../icons/google-drive-logo.svg?v=c0d59b18cad1c10b10c2586621d182660f7f6818f461bd1d2a3a26396f6e6ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
