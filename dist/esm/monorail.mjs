export const name="monorail";
export const id="dl_6b33b9a845287c1ee27c";
export const url=new URL("../icons/monorail.svg?v=dbe29413168f459abb921a3936eb555a54962a758bf65ecb05c14e8f2791f341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
