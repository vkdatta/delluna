export const name="fish-simple";
export const id="dl_fdc565403c694491b99f";
export const url=new URL("../icons/fish-simple.svg?v=3e22a76001eca32ec06a4c02085e2669085391956c430bfed6eca1e9121c247d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
