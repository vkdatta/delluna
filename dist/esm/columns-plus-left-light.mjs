export const name="columns-plus-left-light";
export const id="dl_c6f45d77baa641d0a674";
export const url=new URL("../icons/columns-plus-left-light.svg?v=94017a73a380280e68c4ead11cb9f022f41bc1abbf51750aaa73bbb7aa3e0da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
