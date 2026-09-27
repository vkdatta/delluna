export const name="seal-percent";
export const id="dl_48ac2837869d5787519f";
export const url=new URL("../icons/seal-percent.svg?v=881345f02bea2cb7eb6dcbea22f074e1cfdae8eac7dabdd612ff8c49d867d028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
