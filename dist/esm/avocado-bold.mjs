export const name="avocado-bold";
export const id="dl_288fb05a8b654eacad69";
export const url=new URL("../icons/avocado-bold.svg?v=b38edc5dcbb6787b9177018b03a92b1627d996ae9d626f07c1d6a80f468aecec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
