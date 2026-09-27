export const name="acorn-light";
export const id="dl_0ff8beb2e0c441f2b532";
export const url=new URL("../icons/acorn-light.svg?v=654578ea96222305b99aaad8dcc73cd3e7333cd00bab2c5d3017d8203a667bd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
