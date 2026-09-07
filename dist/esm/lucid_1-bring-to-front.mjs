export const name="lucid_1-bring-to-front";
export const id="dl_233f080f0db44483a17f";
export const url=new URL("../icons/lucid_1-bring-to-front.svg?v=68784c0134edd35688c3a7cbc892f73c25a6829e45608b4f91868c36a133e8f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
