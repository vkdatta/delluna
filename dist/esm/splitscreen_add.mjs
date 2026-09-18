export const name="splitscreen_add";
export const id="dl_c8c781a1b31d4e80a145";
export const url=new URL("../icons/splitscreen_add.svg?v=daf5350d4d1315e9035e7458a869c8073e41f3833afec885ec97b0ac4cd0ddb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
