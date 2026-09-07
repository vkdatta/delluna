export const name="lucid_1-circle-arrow-out-up-right";
export const id="dl_0d77d46c9d074e80aa04";
export const url=new URL("../icons/lucid_1-circle-arrow-out-up-right.svg?v=029338f649abb72dd100b8d39983a25d5faf981dff08114addb4ae35f0c18af5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
