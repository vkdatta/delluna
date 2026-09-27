export const name="highlighter_size_3";
export const id="dl_b1e33bea599633ca1d85";
export const url=new URL("../icons/highlighter_size_3.svg?v=d1f3b7bc27c38c9f0f962f22e391c83a676946ae6aa1666f4e2943bb51f692cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
