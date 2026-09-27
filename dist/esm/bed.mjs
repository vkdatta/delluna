export const name="bed";
export const id="dl_7e0f933ebbf84468b866";
export const url=new URL("../icons/bed.svg?v=381ea6f65594739df564f2ffaa77f5180b77e2f2ffa05b0050639ca052a4b19c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
