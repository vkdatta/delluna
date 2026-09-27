export const name="format_letter_spacing_wider";
export const id="dl_2dd027333f22ef6e2f0e";
export const url=new URL("../icons/format_letter_spacing_wider.svg?v=29d340ebcc90144bbc9aaa82b650c60084bee539d082d8e5b75fe267bbd12533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
