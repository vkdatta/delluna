export const name="lucid_2-grid-2x2";
export const id="dl_71da725e64a745be92b3";
export const url=new URL("../icons/lucid_2-grid-2x2.svg?v=13cb000bfce8932ff881ed67891acb5e34b6de3e8601c3a5eeb748c7a17e6e29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
