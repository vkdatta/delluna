export const name="mobile_hand";
export const id="dl_b1e45ae35ba4d7283832";
export const url=new URL("../icons/mobile_hand.svg?v=00b8d4d63c15020b2316f750cf6246c607fa3e5273654e383ce9fa1bd8ba2297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
