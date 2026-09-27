export const name="pen_size_2-fill";
export const id="dl_e5bb9a99083df16654d9";
export const url=new URL("../icons/pen_size_2-fill.svg?v=65500cfc9f4862ecd5c7a029d15d481d5df587bebd8e6066e53165fbe988e5ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
