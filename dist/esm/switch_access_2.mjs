export const name="switch_access_2";
export const id="dl_be61e89ca019974fccb6";
export const url=new URL("../icons/switch_access_2.svg?v=08255411ae547d041ea2e3af7f51706bcfb28c963fcc7008f284d282a7bc082a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
