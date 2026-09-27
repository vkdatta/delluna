export const name="lucid_3-shield";
export const id="dl_2f8fcb2a7f71476db6e7";
export const url=new URL("../icons/lucid_3-shield.svg?v=5dd94050ea62754be0d2d121dfda931b635e98167037412123e2681f6dab7498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
