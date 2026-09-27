export const name="lucid_2-library";
export const id="dl_3fceab05bf5744fba7d8";
export const url=new URL("../icons/lucid_2-library.svg?v=30578dababe0adae676e4745233d338a1412b05aea38ac6f496f814417fce3c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
