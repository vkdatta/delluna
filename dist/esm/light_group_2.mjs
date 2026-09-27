export const name="light_group_2";
export const id="dl_57273672fa46fd4ec53e";
export const url=new URL("../icons/light_group_2.svg?v=c76a7af7e1b18100b12b73e37c0d1bf55a7283da36146fc82568e4f5a629e732",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
