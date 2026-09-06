export const name="number-circle-five";
export const id="dl_cce035ce9a5a4647bbe1";
export const url=new URL("../icons/number-circle-five.svg?v=0946a3f21a502b08089bbc48763e2b4d9695d06a10faae6afd166118af46b668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
