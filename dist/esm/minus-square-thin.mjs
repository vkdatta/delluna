export const name="minus-square-thin";
export const id="dl_8592c80918ff454fb8d1";
export const url=new URL("../icons/minus-square-thin.svg?v=85a46287e2d4ec61e0deb0678301bd7979c9c208d9c9aee715d0d76c27274083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
