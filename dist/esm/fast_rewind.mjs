export const name="fast_rewind";
export const id="dl_cf5a4451c8d0cdbda18a";
export const url=new URL("../icons/F/fast_rewind.svg?v=0f87be6532b5283bb1f8bf3f8e45c6aa7831c5d1f56a615c07bc4a1662d59045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
