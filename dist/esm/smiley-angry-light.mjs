export const name="smiley-angry-light";
export const id="dl_9f6e5a77945c24ee3388";
export const url=new URL("../icons/smiley-angry-light.svg?v=d6b2ab523320a38ee68e16cc662d4be81c60bb96edeba83b5bd6922e7ff45142",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
