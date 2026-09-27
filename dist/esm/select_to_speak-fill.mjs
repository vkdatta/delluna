export const name="select_to_speak-fill";
export const id="dl_f6de1e485303413935cd";
export const url=new URL("../icons/select_to_speak-fill.svg?v=e2e6d7e504dce2461f8dd57c1179b34107d843d55e7fcf931d5f36b2dc27f44c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
