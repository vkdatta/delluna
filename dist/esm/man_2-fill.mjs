export const name="man_2-fill";
export const id="dl_f2bc5928fbecabcde031";
export const url=new URL("../icons/man_2-fill.svg?v=fcbe4d048b81908fe0e698ba6eceb6691860c5bfe8d5c44828e2fbf9c8b97365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
