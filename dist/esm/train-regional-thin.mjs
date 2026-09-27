export const name="train-regional-thin";
export const id="dl_a1c3934bb1a3be41cb25";
export const url=new URL("../icons/train-regional-thin.svg?v=7d6bae3f0b54e6ce5afe0d0050fe5f458d599a86061d97109e8b65400bd36954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
