export const name="close_alt";
export const id="dl_49a24d4677a3dd5a3a8a";
export const url=new URL("../icons/close_alt.svg?v=05df7b706c4c09015200bf8189dde603bb4580acd1232b54b53d7f6309438124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
