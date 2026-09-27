export const name="youtube-logo-duotone";
export const id="dl_f8694a4a93373df6bd0e";
export const url=new URL("../icons/youtube-logo-duotone.svg?v=d0a18f7525e4c750fb34cc6985526d6feec9ee33f7327dc387e32b40d9841b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
