export const name="liquor";
export const id="dl_36ae174246e94c69bacb";
export const url=new URL("../icons/L/liquor.svg?v=6d6fcd255f84c5e77ea7720f4f54288f58be26419a4b883d23664f9ea07a04ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
