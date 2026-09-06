export const name="bell-duotone";
export const id="dl_c76788f0e59f4a20b190";
export const url=new URL("../icons/bell-duotone.svg?v=77f99c9aa7747cc92eae7c225d96e894c40275559e0f40d7ddb7513653a87c19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
