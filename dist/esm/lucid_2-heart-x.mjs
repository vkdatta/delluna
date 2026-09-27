export const name="lucid_2-heart-x";
export const id="dl_8c8e95e0b40c42de8e22";
export const url=new URL("../icons/lucid_2-heart-x.svg?v=4adc62e07a9f9ea3865581cb75b885a95ce2a1c67d9c0d054612bd9e415cf092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
