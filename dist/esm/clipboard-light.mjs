export const name="clipboard-light";
export const id="dl_be75e0eedc634e5da4b0";
export const url=new URL("../icons/clipboard-light.svg?v=7bc8063a44ebd72b09f1fed3933e34b3737cf26fbf7d9d7c491e020d5faf435a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
