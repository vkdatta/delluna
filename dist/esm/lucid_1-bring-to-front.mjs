export const name="lucid_1-bring-to-front";
export const id="dl_233f080f0db44483a17f";
export const url=new URL("../icons/lucid_1-bring-to-front.svg?v=f0a51172f0a9234fffa268bf2a69d597aa8a6441b1da53acf56e0b4d7fb18728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
