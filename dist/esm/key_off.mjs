export const name="key_off";
export const id="dl_2caab070dfb3a76e2d91";
export const url=new URL("../icons/key_off.svg?v=4fff1625ce436e01ccf23b0fe5a2036514b7c932ca8281b7ce34670df95b8cb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
