export const name="package-fill";
export const id="dl_867905a7c459433699d8";
export const url=new URL("../icons/package-fill.svg?v=4fa88054eefc32099e7fdc802cf4b4a1368cbbd914f06ab673fb54c11202bd49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
