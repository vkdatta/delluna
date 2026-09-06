export const name="arrow-u-down-left-light";
export const id="dl_f1bcabbbd72d47e595d5";
export const url=new URL("../icons/arrow-u-down-left-light.svg?v=ef61957cfb79b063e623ee1ea6978e161f6f5cae88ea8f5f621875a37641376d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
