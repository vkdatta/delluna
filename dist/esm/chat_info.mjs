export const name="chat_info";
export const id="dl_391b8d8e44a450ad8394";
export const url=new URL("../icons/chat_info.svg?v=29d01129f54ac44b62679d7e65523dfb46b5ea2ae72c686500dbe0288caaea87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
