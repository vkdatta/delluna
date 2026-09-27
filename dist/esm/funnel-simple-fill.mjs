export const name="funnel-simple-fill";
export const id="dl_e5d7d85c60db4bf3be80";
export const url=new URL("../icons/funnel-simple-fill.svg?v=0e35d5352533e86e100b66ae7b0f4d47f70e45004bc6ebf66dd642788c702ce3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
