export const name="tumblr-logo-duotone";
export const id="dl_01a13e2bd1ac9ce791ec";
export const url=new URL("../icons/tumblr-logo-duotone.svg?v=bd430470067cc812b207ec74bb72adc73e10428d70bf26e0f9190982c68f3e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
