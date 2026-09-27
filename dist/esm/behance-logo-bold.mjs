export const name="behance-logo-bold";
export const id="dl_cc79558ab4bd4d878e24";
export const url=new URL("../icons/behance-logo-bold.svg?v=8fbeaa3a90ab0ca2ca19228db6c27f769ab0ea7cc88d4bc42b5279bcaeb4646c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
