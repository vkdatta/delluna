export const name="orange-slice-light";
export const id="dl_be980facbfe34aea838b";
export const url=new URL("../icons/orange-slice-light.svg?v=94dd5b063f113de4c0adc7f5ffd739e23e54770a78da76c7717a5d872643eec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
