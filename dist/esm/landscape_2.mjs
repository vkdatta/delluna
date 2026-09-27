export const name="landscape_2";
export const id="dl_cb5cfcbfe224111e4a99";
export const url=new URL("../icons/landscape_2.svg?v=9510c24c3be474846770c3b55a736e27823f8b790005a84d380571d812ed8281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
