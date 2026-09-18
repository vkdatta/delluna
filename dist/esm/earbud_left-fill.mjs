export const name="earbud_left-fill";
export const id="dl_c6456ce3481d48fb9c29";
export const url=new URL("../icons/earbud_left-fill.svg?v=24257fd5e7d751f01fec25cf8dd1a0b05ee62c4dbb601bba6953c2739c249ce0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
