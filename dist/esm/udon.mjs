export const name="udon";
export const id="dl_c17f028b95192d51617d";
export const url=new URL("../icons/udon.svg?v=ec6d43e526e91a028a08f7ebb3b62275398f988463f305563ae82159b40f7ae1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
