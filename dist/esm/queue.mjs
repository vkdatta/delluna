export const name="queue";
export const id="dl_b8ec22f82225465f8a4b";
export const url=new URL("../icons/queue.svg?v=afca8abc51d163ba1aa058888463146cceb0d131ad9654ed4f37253e19e429d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
