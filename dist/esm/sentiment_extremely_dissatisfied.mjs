export const name="sentiment_extremely_dissatisfied";
export const id="dl_b63268337ddef00774c2";
export const url=new URL("../icons/sentiment_extremely_dissatisfied.svg?v=c71199e4cdd6c66298cc789b4a0f6f13c024322a74a49fb01d031e81a91c353a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
