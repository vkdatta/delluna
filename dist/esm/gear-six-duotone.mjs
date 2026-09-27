export const name="gear-six-duotone";
export const id="dl_0532c89f86254b48a9bf";
export const url=new URL("../icons/gear-six-duotone.svg?v=f8c5eed542b8b5fad9526a7bbe97ee70b765e561ae334187e7eefb2fe1fcbf4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
