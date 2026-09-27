export const name="globe_asia-fill";
export const id="dl_39524dac411d64b74464";
export const url=new URL("../icons/globe_asia-fill.svg?v=523fe9737728f84886efc09e9bd3657dade2f4fbb845ee71f5490a277420de33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
