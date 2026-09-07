export const name="suitcase-simple-thin";
export const id="dl_99c9abe62a0e41428508";
export const url=new URL("../icons/S/suitcase-simple-thin.svg?v=a8d4cc41cdf26b516003cbe533046b31e94611b5419ea72d496e0835e060e0a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
